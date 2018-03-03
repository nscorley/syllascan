import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Divider, ListItem, Input, Card, Icon } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import DateTimePicker from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat';
import { common } from '../styles';
import Loader from './Loader';
import { BACKGROUND_COLOR, DARK_BLUE } from '../styles/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;


export default class EventsPage extends React.Component {
    renderHeader = (section, _, isActive) => {
        let icon;
        if (section.type == 'test') {
            icon = { name: 'clipboard-notes', type: 'foundation', style: styles.icon }
        } else if (section.type == 'homework') {
            icon = { name: 'pencil', type: 'foundation', style: styles.icon }
        } else {
            icon = { name: 'person', style: styles.icon }
        }
        const start = dateFormat(section.event.startDate, "dddd, mmmm dS, yyyy");
        return (
            <View>
                <ListItem
                    roundAvatar
                    leftIcon={icon}
                    title={section.event.title}
                    subtitle={start}
                    rightIcon={{ name: isActive ? 'chevron-down' : 'chevron-right', type: 'feather' }}
                    badge={{
                        element: <Icon
                            name="trash"
                            type='entypo'
                            size={20}
                            iconStyle={{ marginRight: 10 }}
                            onPress={() => this.props.removeEvent(section.id)}
                        />
                    }}
                />
            </View>
        );
    }

    renderContent = (section) => {
        const start = dateFormat(section.event.startDate, "dddd, mmmm dS, yyyy");
        const { updateEvent, addEvent, removeEvent, showDatePicker } = this.props;
        return (
            <View style={styles.content}>
                <Text style={styles.label}>TITLE</Text>
                <Input
                    value={section.event.title}
                    shake={true}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    onChangeText={(text) => updateEvent({ ...section.event, title: text }, section.id)}
                />
                <Text style={styles.label}>DATE</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{start}</Text>
                    <Icon
                        iconStyle={styles.dateIcon}
                        name='date-range'
                        color={DARK_BLUE}
                        size={30}
                        onPress={() => showDatePicker(section.id)}
                    />
                </View>
                <Text style={styles.label}>NOTES</Text>
                <Input
                    value={section.event.notes}
                    shake={true}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    onChangeText={(text) => updateEvent({ ...section.event, notes: text }, section.id)}
                />
                <Divider style={{ height: 15 }} />
            </View>
        );
    }

    render() {
        const { handleSchedule, events, datePickerVisible, handleDatePicked, hideDatePicker, handleAddAnother } = this.props;
        return (
            <ScrollView style={styles.wrapper}>
                <DateTimePicker
                    isVisible={datePickerVisible}
                    onConfirm={handleDatePicked}
                    onCancel={hideDatePicker}
                    mode='date'
                    titleIOS='Pick a Date'
                />
                <Accordion
                    sections={events}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    duration={500}
                    underlayColor='transparent'
                />
                <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1, height: 600 }}>
                    <Divider style={{ height: 30, backgroundColor: BACKGROUND_COLOR }} />
                    <Button
                        text="ADD ANOTHER EVENT"
                        onPress={handleAddAnother}
                        buttonStyle={common.button}
                    />
                    <Divider style={{ height: 10, backgroundColor: BACKGROUND_COLOR }} />
                    <Text style={styles.or}>OR</Text>
                    <Divider style={{ height: 10, backgroundColor: BACKGROUND_COLOR }} />
                    <Button
                        text="CONFIRM & SCHEDULE"
                        onPress={handleSchedule}
                        buttonStyle={common.button}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    or: {
        ...common.text,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    wrapper: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
    },
    icon: {
        width: 30,
        textAlign: 'center',
    },
    inputContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: DARK_BLUE,
        height: 40,
        width: SCREEN_WIDTH - 50,
        marginVertical: 3,
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        fontWeight: '200',
    },
    label: {
        ...common.text,
        fontSize: 20,
        color: 'black',
        marginTop: 10,
    },
    dateIcon: {
        bottom: 5,
        marginHorizontal: 5,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: 0.75,
        borderColor: DARK_BLUE,
        padding: 10,
        width: SCREEN_WIDTH - 50,
        justifyContent: 'center'
    }
});







