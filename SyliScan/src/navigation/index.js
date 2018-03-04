/**
 * Configuration file for React Navigation stack
 * Controls common themes, etc.
 */

import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from "react-navigation";
import Routes from './routes';
import { Ionicons } from '@expo/vector-icons';
import { DARK_BLUE } from '../styles/colors';

const NavigationStack = StackNavigator(
    Routes,
    {
        initialRouteName: 'HomePage',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#424242',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Courier New',
                fontSize: 20,
            },
            headerBackTitle: null,
        },
    }
);

export default NavigationStack;