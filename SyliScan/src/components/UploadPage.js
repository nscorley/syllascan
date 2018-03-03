import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import ActivityIndicator from 'react-native-activity-indicator';
import { Button, Divider, Icon } from 'react-native-elements';
import { DARK_BLUE, BACKGROUND_COLOR } from '../styles/colors';
import { common } from '../styles';
import Loader from './Loader';

const UploadPage = ({ loading, finished, pickImage, takeImage, ocr }) => {
    return (
        <View style={common.container}>
            <Loader
                loading={loading}
            />

            <Button
                icon={
                    <Icon
                        type='feather'
                        name='camera'
                        size={20}
                        color='white'
                    />
                }
                buttonStyle={common.button}
                text='TAKE A PHOTO'
                onPress={takeImage}
            />
            <Divider style={{ height: 15 }} />
            <Text style={styles.or}>OR</Text>
            <Divider style={{ height: 15 }} />
            <Button
                icon={
                    <Icon
                        type='feather'
                        name='upload'
                        size={20}
                        color='white'
                    />
                }
                buttonStyle={common.button}
                text='PICK FROM CAMERA ROLL'
                onPress={pickImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    or: {
        ...common.text,
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default UploadPage;