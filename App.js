import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import styles from './Styles';

const Stack = createStackNavigator ();


export default function App() {
  return (
    
    <NavigationContainer style={styles.containerApp}>
          <Stack.Navigator>
            <Stack.Screen name="Home" 
                component={Home}                 
                initialParams={{ fromChild: 'Initial' }}/>
                <Stack.Screen name="Login" 
                component={Login} 
                options={{
                  headerStyle: {
                    backgroundColor: '#390050',
                  },
                  headerTintColor:'white',
                  headerTitleStyle:{
                    fontWeight: 'bold',
                  },headerTitleAlign: 'center',
                }}/>
            </Stack.Navigator>
          </NavigationContainer>
    
  );
}
