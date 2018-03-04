import React from 'react';
import { connect } from 'react-redux';
import { Calendar, Permissions } from 'expo';
import EventsPage from '../components/EventsPage';
import { updateEvent, addEvent, removeEvent } from '../actions/updateEvents';

class EventsPageContainer extends React.Component {
    // page title
    static navigationOptions = {
        title: 'EVENTS',
    };

    state = {
        datePickerVisible: false,
        activeID: null,
        loading: false,
    }

    handleAddAnother = () => {
        const start = new Date();
        const end = new Date();
        end.setTime(end.getTime() + 1 * 60 * 60 * 1000);
        const max = Math.max.apply(Math, this.props.events.map((e) => e.id)) + 1;
        const newEvent = {
            id: max,
            event: {
                title: 'New Event',
                notes: '',
                startDate: start,
                endDate: end,
            },
            type: 'homework',
        }
        this.props.dispatch(addEvent(newEvent, max));
    }

    showDatePicker = (id) => {
        this.setState({ datePickerVisible: true, activeID: id });
    }

    hideDatePicker = () => {
        this.setState({ datePickerVisible: false });
    }

    handleDatePicked = (date) => {
        this.hideDatePicker();
        const end = new Date(date.getTime());
        end.setTime(end.getTime() + 1 * 60 * 60 * 1000);

        const { activeID } = this.state;
        const e = this.props.events.filter((e) => e.id == activeID)[0];
        this.props.dispatch(updateEvent({ ...e.event, startDate: date, endDate: end }, activeID));
    }

    handleSchedule = async () => {
        // get permission to access the calendar
        await Permissions.askAsync('calendar');

        this.setState({ loading: true });

        // make events
        Calendar.getCalendarsAsync().then((result) => {
            const calendar = result.filter(c => c.source.name == 'Default');

            // create events with default calendar, or first that shows up if multiple
            this.createEvents(calendar[0]);
        })
    }

    createEvents = async (calendar) => {
        const events = this.props.events;

        for (e of events) {

            const event = e.event;
            
            // await Calendar.createEventAsync(calendar.id, {...event, allDay: true}).then((id) => {
            //     console.log("Created Event. Event ID: " + id);
            // })
        }

        this.setState({ loading: false });
        this.props.navigation.navigate('SuccessPage');
    }

    render() {
        return (
            <EventsPage
                handleSchedule={this.handleSchedule}
                events={this.props.events}
                updateEvent={this.props.updateEvent}
                addEvent={this.props.addEvent}
                removeEvent={this.props.removeEvent}
                datePickerVisible={this.state.datePickerVisible}
                showDatePicker={this.showDatePicker}
                hideDatePicker={this.hideDatePicker}
                handleDatePicked={this.handleDatePicked}
                handleAddAnother={this.handleAddAnother}
                loading={this.state.loading}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events
})

const mapDispatchToProps = (dispatch) => ({
    updateEvent: (event, id) => dispatch(updateEvent(event, id)),
    addEvent: (event, id) => dispatch(addEvent(event, id)),
    removeEvent: (id) => dispatch(removeEvent(id)),
    dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsPageContainer);