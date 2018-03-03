import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import ActivityIndicator from 'react-native-activity-indicator';
import { DARK_BLUE } from '../styles/colors';
import { common } from '../styles';

const Loader = ({ loading }) => (
    <Modal
        visible={loading}
        animationType={'slide'}
        transparent={true}
    >
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator size={60} thickness={2} color={DARK_BLUE} />
            </View>
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loader;