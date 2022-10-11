import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import stylesApp from './styles/StyleApp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={stylesApp.containerApp}>
          <Stack.Navigator>
            <Stack.Screen name="Home" 
                component={Home}                 
                initialParams={{ fromChild: 'Initial' }}/>
                <Stack.Screen name="Login" 
                title="Iniciar Sesión"
                component={Login} 
                options={{
                  headerStyle: {
                    backgroundColor: 'transparent',
                  },
                  headerTintColor:'white',
                  headerTitleStyle:{
                    fontWeight: 'bold', 
                    color: 'black',
                  },
                  headerTitleAlign: 'center',
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
                </Stack.Navigator>
    </NavigationContainer> 
  );
}

