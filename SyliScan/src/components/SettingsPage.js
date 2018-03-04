import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { common } from '../styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Loader from './Loader';

export default class SettingsPage extends React.Component {
    render() {
        const { handleToggleParseExams,
            handleToggleParsePapers,
            handleToggleParseHomeworks,
            handleChangeClassName,
            parseData,
            parseExams,
            parsePapers,
            parseHomeworks,
            className,
            classTime,
            timePickerVisible,
            handleTimePicked,
            hideTimePicker,
            showTimePicker,
            loading,
        } = this.props;

        return (
            <View style={common.container}>
                <Loader
                    loading={loading}
                />
                <DateTimePicker
                    isVisible={timePickerVisible}
                    onConfirm={handleTimePicked}
                    onCancel={hideTimePicker}
                    mode='time'
                    titleIOS='Pick a Time'
                />
                <Input
                    value={className}
                    onChangeText={handleChangeClassName}
                />
                <Text>Class Name: {className}</Text>
                <Button
                    style={common.button}
                    text='Show the picker! Go! Now! Show! Whoohoo!'
                    onPress={showTimePicker}
                />
                <Button
                    style={common.button}
                    text='Do the magic...'
                    onPress={parseData} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
});



