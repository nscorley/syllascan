import React from 'react';
import { connect } from 'react-redux';
import SettingsPage from '../components/SettingsPage';
import { addEvent } from '../actions/updateEvents';

// TODO: toggle between event and reminder?
// TODO: adjust "level" of parsing
// TODO: provide identifying name of class
// TODO: maybe reminder options?

class SettingsPageContainer extends React.Component {
    state = {
        parseExams: true,
        parsePapers: true,
        parseHomeworks: true,
        className: '',
        classTime: null,
    }

    handleToggleParseExams = () => this.setState({ parseExams: !this.state.parseExams })

    handleToggleParsePapers = () => this.setState({ parsePapers: !this.state.parsePapers })

    handleToggleParseHomeworks = () => this.setState({ parseHomeworks: !this.state.parseHomeworks })

    handleChangeClassName = (name) => this.setState({ className: name })

    handleChangeClassTime = (time) => this.setState({ classTime: time })

    parseData = () => {
        console.log('Parsing data...');
        const data = this.props.image;
        console.log(data);
        this.props.navigation.navigate('EventsPage');
    }

    addNewEvent = (newEvent, newType) => {
        const max = Math.max.apply(Math, this.props.events.map((e) => e.id)) + 1;
        const event = {
            id: max,
            event: newEvent,
            type: newType,
        }
        this.props.dispatch(addEvent(newEvent, max));
    }

    render() {
        return (
            <SettingsPage
                handleToggleParseExams={this.handleToggleParseExams}
                handleToggleParsePapers={this.handleToggleParsePapers}
                handleToggleParseHomeworks={this.handleToggleParseHomeworks}
                handleChangeClassName={this.handleChangeClassName}
                handleChangeClassTime={this.handleChangeClassTime}
                parseData={this.parseData}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    image: state.image,
    events: state.events,
})

const mapDispatchToProps = (dispatch) => ({
    dispatch,
})


export default connect(mapStateToProps)(SettingsPageContainer);