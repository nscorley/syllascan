import React from 'react';
import { connect } from 'react-redux';
import SettingsPage from '../components/SettingsPage';
import { addEvent } from '../actions/updateEvents';
import {
    containsDate,
    keyWordAnalysis,
    isRelevantKeyWord,
    extractDateFromLine,
    getKeyWordType
}
    from '../utils';

class SettingsPageContainer extends React.Component {
    static navigationOptions = {
        title: 'SETTINGS',
    };
    state = {
        parseExams: true,
        parsePapers: true,
        parseHomeworks: true,
        className: '',
        classTime: null,
        timePickerVisible: false,
        loading: false,
    }


    // toggles
    handleToggleParseExams = () => this.setState({ parseExams: !this.state.parseExams })

    handleToggleParsePapers = () => this.setState({ parsePapers: !this.state.parsePapers })

    handleToggleParseHomeworks = () => this.setState({ parseHomeworks: !this.state.parseHomeworks })

    // name
    handleChangeClassName = (name) => this.setState({ className: name })

    // time
    hideTimePicker = () => this.setState({ timePickerVisible: false })
    showTimePicker = () => this.setState({ timePickerVisible: true })
    handleTimePicked = (time) => {
        console.log('Good Shit.')
        console.log(time);
        this.hideTimePicker();
    }
    
    parseData = async () => {
        this.setState({ loading: true });
        let data = this.props.image.text;

        // keep only the lines with months
        data = data.filter(line => containsDate(line));

        // send to Microsoft API
        for (line of data) {
            // use MS API to find most important key words
            let keyWords = await keyWordAnalysis(line);

            if(keyWords.length < 1) continue;


            // find the relevant key words
            keyWords = keyWords.filter(word => isRelevantKeyWord(word));

            // capture the event's date
            const eventDate = extractDateFromLine(line);

            // set the time to the user entered class time
            if(this.state.classTime) {
                eventDate.setTime(this.state.classTime);
            }

            // set the end
            const end = new Date(eventDate.toString());
            end.setTime(end.getTime() + 1 * 60 * 60 * 1000);

            // we pick the first accepted keyword
            const chosenKeyWord = keyWords[0];

            // get the key word 'type' i.e. 'exam', 'homework', 'essay', etc.
            const eventType = getKeyWordType(chosenKeyWord);

            if(eventType.toUpperCase() == 'TEST' && !this.state.parseExams) continue;
            if(eventType.toUpperCase() == 'HOMEWORK' && !this.state.parseHomeworks) continue;
            if (eventType.toUpperCase() == 'PAPER' && !this.state.parsePapers) continue;

            const event = {
                title: `${this.state.className} ${chosenKeyWord}`,
                notes: '',
                startDate: eventDate,
                endDate: end,
            }

            this.addNewEvent(event, eventType);
        }

        await this.setState({ loading: false });

        // navigate to next page after all is said and done
        this.props.navigation.navigate('EventsPage');
    }

    addNewEvent = (newEvent, newType) => {
        let max;
        if(this.props.events.length > 0) {
            max = Math.max.apply(Math, this.props.events.map((e) => e.id)) + 1;
        } else {
            max = 0;
        }

        const event = {
            id: max,
            event: newEvent,
            type: newType,
        }
        
        this.props.dispatch(addEvent(event, max));
    }

    render() {
        return (
            <SettingsPage
                handleToggleParseExams={this.handleToggleParseExams}
                handleToggleParsePapers={this.handleToggleParsePapers}
                handleToggleParseHomeworks={this.handleToggleParseHomeworks}
                handleChangeClassName={this.handleChangeClassName}
                parseData={this.parseData}
                handleTimePicked={this.handleTimePicked}
                hideTimePicker={this.hideTimePicker}
                showTimePicker={this.showTimePicker}
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