import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { common } from '../styles';
import { DARK_BLUE, BACKGROUND_COLOR } from '../styles/colors';


export default class Home extends React.Component {
    // Page title
    static navigationOptions = {
        header: null,
    };
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={common.container} source={require('../images/bookshelf.png')}>
                <StatusBar
                    barStyle="light-content"
                />
                <View style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>

                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <Text style={styles.title}>Sylla</Text>
                        <Text style={styles.titleTwo}>SCAN</Text>
                    </View>
                    <Divider style={{ height: 10, backgroundColor: 'transparent' }} />
                    <Icon name='camera' size={70} color='white' />
                </View>
                   
                   
                    
                    <View style={{ display: 'flex', justifyContent: 'center'}}>
                        <Text style={styles.caption}>
                            The automated scheduler.
                        </Text>
                        <Divider style={{ height: 20, backgroundColor: 'transparent' }} />
                        <Button
                            icon={
                                <Icon
                                    type='feather'
                                    name='arrow-right'
                                    size={20}
                                    color='white'
                                />
                            }
                            iconRight
                            buttonStyle={common.button}
                            text='GET STARTED'
                            onPress={() => navigation.navigate('UploadPage')}
                        />
                    </View>
                </View>



            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    title: {
        ...common.text,
        fontSize: 40,
        fontWeight: '200',
    },
    titleTwo: {
        ...common.text,
        fontSize: 40,
        fontWeight: 'bold',
    },
    caption: {
        ...common.text,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    }
});
