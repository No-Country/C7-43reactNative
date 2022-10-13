import React, { useContext, useEffect } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from './styles/StyleApp';
import NavigationStack from './utilities/NavigationStack';
import { createContext } from 'react';
import { useWindowDimensions } from 'react-native';





export default function App() {
  //useEffect(()=> {
    const contextApp = createContext();
    // const windowWidth =;
    // const windowHeight = ;
    contextApp.setWidth =  useWindowDimensions().width
    contextApp.setHeight = useWindowDimensions().height
 //})

  return (
    <NavigationContainer style={stylesApp.containerApp}>
      {useContext.width}
          <NavigationStack/>
    </NavigationContainer> 
  );
}

