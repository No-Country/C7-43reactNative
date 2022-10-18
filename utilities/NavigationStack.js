
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';
import Feed from '../Screens/Feed';


const Stack = createStackNavigator();

export default function NavigationStack(){
    return (
<Stack.Navigator>
    <Stack.Screen name="Home" 
        component={Home}                 
        initialParams={{ fromChild: 'Initial' }}/>
        <Stack.Screen name="Login" 
        title="Iniciar Sesión"
        component={Login} 
        options={
            {
            headerStyle: {
            backgroundColor: 'transparent',
            },
            headerTintColor:'white',
            headerTitleStyle:{
            fontWeight: 'bold', 
            color: 'black',
            },
             headerTitleAlign: 'center',
            // headerShown:false,
        }}/>
        <Stack.Screen
            name= "Profile"
            title= ""
            component={Profile}
            options={{
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitleStyle:{
                fontWeight: 'bold',
            },headerTitleAlign: 'center',
            }}
            />
            <Stack.Screen
            name= "Feed"
            title= ""
            component={Feed}
            options={{
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitleStyle:{
                fontWeight: 'bold',
            },headerTitleAlign: 'center',
            }}
            />
     </Stack.Navigator>
    )
};
