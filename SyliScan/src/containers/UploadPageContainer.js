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

        // ocr endpoint
        const url = 'https://api.ocr.space/parse/image';

        // create form
        const form = new FormData();

        // oh god this is hacky
        form.append('base64image', `data:image/png;base64,${base64}`);

        // execute!
        fetch(url, {
            method: 'post',
            body: form,
            headers: {
                // shhhhhh
                'apikey': '1514b99e7688957',
            }
        })
            .then(res => res.json())
            .then(json => {
                this.props.updateText(json.ParsedResults[0].ParsedText);
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

const mapStateToProps = (state) => ({
    count: state.count,
})

const mapDispatchToProps = (dispatch) => ({
    updateURI: (uri) => dispatch(updateURI(uri)),
    updateText: (text) => dispatch(updateText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadPageContainer);