import React from 'react';
import {View} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

// Screens
import Sunat from '../screens/Sunat';
import Reniec from '../screens/Reniec';
import Onpe from '../screens/Onpe';


const AuthStack = createStackNavigator(
    {
        Sunat: {
            screen: Sunat,
            navigationOptions: {
                headerBackTitle: null,
            }
        },
        Reniec,
        Onpe: {
            screen: Onpe,
            navigationOptions: () => ({
                title: 'Onpe'
            })
        }
    },
    {
        contentOptions: {
            inactiveTintColor: 'white'
        },
        headerLayoutPreset: 'center'
    }
);

const AppNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthStack: AuthStack,
    },
    {
        initialRouteName: 'AuthStack',
    }
));

export default AppNavigator;
