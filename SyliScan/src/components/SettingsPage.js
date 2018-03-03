import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { common } from '../styles';

const SettingsPage = ({ image, navigation }) => (
    <View style={common.container}>
        <Text>Parsed Text:</Text>
        <Text>{image.text}</Text>
        <Button 
        style={common.button} 
        text='Next...' 
        onPress={() => navigation.navigate('EventsPage')} />
    </View>
)

const styles = StyleSheet.create({
});

export default SettingsPage;


