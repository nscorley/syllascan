import React from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { updateURI, updateText } from '../actions/updateImageData';
import UploadPage from '../components/UploadPage';

class UploadPageContainer extends React.Component {
    // page title
    static navigationOptions = {
        title: 'Upload',
    };

    // default state - for semantic purposes
    state = {
        loading: false,
        finished: false,
    }

    /**
     * Pick image from camera roll
     */
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.props.updateURI(result.uri);
            this.ocr(result);
        }
    };

    /**
     * Take new photo rather than from camera roll
     */
    takeImage = async () => {
        let result = await Expo.ImagePicker.launchCameraAsync({
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
        })

        if (!result.cancelled) {
            this.props.updateURI(result.uri);
            this.ocr(result);
        }
    }

    /**
     * Perform ocr request
     */
    ocr = (image) => {
        const { base64 } = image;

        // set loading
        this.setState({ loading: true });

        // shhhhh
        const apiKey = 'AIzaSyD5QSqxF8Oj8vAZA9MqsHAx0DV1v7GD4t0'

        // ocr endpoint
        const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

        // execute!
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                requests: [
                    {
                        image: {
                            content: base64,
                        },
                        features: [
                            {
                                type: 'DOCUMENT_TEXT_DETECTION'
                            }
                        ]
                    }
                ]
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                const data = json.responses[0].fullTextAnnotation.text.split('\n');
                this.props.updateText(data);
                this.setState({ loading: false });
                this.props.navigation.navigate('SettingsPage');

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <UploadPage
                {...this.state}
                takeImage={this.takeImage}
                pickImage={this.pickImage}
                ocr={this.ocr}
            />
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    updateURI: (uri) => dispatch(updateURI(uri)),
    updateText: (text) => dispatch(updateText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadPageContainer);