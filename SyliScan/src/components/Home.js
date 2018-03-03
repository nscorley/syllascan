import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { common } from '../styles';
import { DARK_BLUE, BACKGROUND_COLOR } from '../styles/colors';


export default class Home extends React.Component {
    // Page title
    static navigationOptions = {
        title: 'Welcome',
        tabBarVisible: false,
    };
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={common.container} source={{ uri: 'https://www.lyfemarketing.com/wp-content/uploads/2015/04/Social-Media-Background-Dark.jpg'}}>
                <Text style={styles.title}>
                    SyliScan
                </Text>
                <Text style={styles.caption}>
                    An automated event scheduler.
                </Text>
                <Divider style={{ height: 40 }} />
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
        fontWeight: 'bold',
    },
    caption: {
        ...common.text,
        fontSize: 20, 
    }
});
