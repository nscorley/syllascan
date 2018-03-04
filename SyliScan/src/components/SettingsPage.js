import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { common } from '../styles';

export default class SettingsPage extends React.Component {
    render() {
        const { handleToggleParseExams,
            handleToggleParsePapers,
            handleToggleParseHomeworks,
            handleChangeClassName,
            handleChangeClassTime,
            parseData,
            parseExams,
            parsePapers,
            parseHomeworks,
            className,
            classTime,
        } = this.props;

        return (
            <View style={common.container}>
                <Input
                    value={className}
                    onChangeText={handleChangeClassName}
                />
                <Text>Class Name: {className}</Text>
                <Button
                    style={common.button}
                    text='Do the magic...'
                    onPress={() => parseData()} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
});



