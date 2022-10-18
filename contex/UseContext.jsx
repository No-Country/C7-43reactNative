import 'react-native-gesture-handler';
import React from 'react';
import {useState, createContext} from 'react';
import { useWindowDimensions } from 'react-native';

const contextApp = createContext();

const [width, setWidth] = useState(0);
const [height, setHeight] =useState(0);


export default contextApp;

