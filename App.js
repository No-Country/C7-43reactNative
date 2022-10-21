import React, { useContext, useEffect } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from './styles/StyleApp';
import NavigationStack from './utilities/NavigationStack';





export default function App() {

 

  return (
    <NavigationContainer style={stylesApp.containerApp}>
          <NavigationStack/>
    </NavigationContainer> 
  );
}

