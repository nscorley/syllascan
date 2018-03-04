import React from 'react';
import { common } from '../styles';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';

export default class Success extends React.Component {
    // page title
    static navigationOptions = {
        title: 'EVENTS',
    };

    render() {
        return (
            <View style={common.container}>
                <Icon name='calendar-multiple-check' type='material-community' size={130} />
                <Divider style={{height: 20}} />
                <Button
                    text="SCAN ANOTHER"
                    onPress={() => this.props.navigation.navigate('UploadPage')}
                    buttonStyle={common.button}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        ...common.text,
        color: 'black',
        padding: 20,
        fontSize: 30,
        fontWeight: '100',
        textAlign: 'center',
    },
});

