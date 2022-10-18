import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator ();

export const BottomTab = ( )=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Perfil" component={Profile}/>
        </Tab.Navigator>
    );
};