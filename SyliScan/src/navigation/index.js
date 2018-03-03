/**
 * Configuration file for React Navigation stack
 * Controls common themes, etc.
 */

import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from "react-navigation";
import Routes from './routes';
import { Ionicons } from '@expo/vector-icons';

const NavigationStack = StackNavigator(
    Routes,
    {
        initialRouteName: 'HomePage',
    }
);

// const NavigationStack = TabNavigator(
//     Routes,
//     {
//         initialRouteName: 'HomePage',
//         navigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let iconName;
//                 if (routeName === 'HomePage') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'UploadPage') {
//                     iconName = `ios-image${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'SettingsPage') {
//                     iconName = `ios-options${focused ? '' : '-outline'}`;
//                 }

//                 // return icon
//                 return <Ionicons name={iconName} size={28} color={tintColor} />;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//             showLabel: false,
//         },
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         animationEnabled: true,
//         swipeEnabled: true,
//     },

// );

export default NavigationStack;