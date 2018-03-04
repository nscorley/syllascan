import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, ScrollView, Dimensions } from 'react-native';
import { Button, Input, Divider, Icon } from 'react-native-elements';
import { common } from '../styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Loader from './Loader';
import { BACKGROUND_COLOR, DARK_BLUE } from '../styles/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: BACKGROUND_COLOR }}>
                <Loader
                    loading={loading}
                />
                <Divider style={{ height: 25 }} />

                <View>
                    <Input
                        value={className}
                        onChangeText={handleChangeClassName}
                        placeholder='Class / Event Name'
                        placeholderTextColor='blue'
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        autoFocus={true}
                        autoCorrect={false}
                    />
                </View>
                <Divider style={{ height: 20 }} />
                <View>
                    <View style={styles.toggleContainer}>
                        <Icon
                            name="clipboard-notes"
                            type="foundation"
                            size={30}
                        />
                        <Text style={styles.switchText}>ADD EXAMS</Text>
                        <Switch
                            value={parseExams}
                            onValueChange={handleToggleParseExams}
                            onTintColor='#2196F3'
                        />
                    </View>
                    <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
                    <View style={styles.toggleContainer}>
                        <Icon
                            name="text"
                            type="entypo"
                            size={30}
                        />
                        <Text style={styles.switchText}>ADD PAPERS</Text>
                        <Switch
                            center
                            value={parsePapers}
                            onValueChange={handleToggleParsePapers}
                            onTintColor='#2196F3'
                        />
                    </View>
                    <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
                    <View style={styles.toggleContainer}>
                        <Icon
                            name="pencil"
                            type="foundation"
                            size={30}
                        />
                        <Text style={styles.switchText}>ADD HOMEWORK</Text>
                        <Switch
                            center
                            value={parseHomeworks}
                            onValueChange={handleToggleParseHomeworks}
                            onTintColor='#2196F3'
                        />
                    </View>
                    <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
                    <Button
                        buttonStyle={common.button}
                        text='CONTINUE'
                        onPress={parseData}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        ...common.text,
        color: 'black',
        fontWeight: '100',
    },
    toggleContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    switchText: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    inputContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9FA8DA',
        height: 40,
        width: SCREEN_WIDTH - 50,
        marginVertical: 3,
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        fontWeight: '200',
    },
});




