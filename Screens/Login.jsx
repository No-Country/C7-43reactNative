import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Image, Text, View, TextInput} from 'react-native';
import styles from '../Styles';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';



  const Login = ({ navigation }) => {
const [text, setText] = useState('');
    return (
        <>
        <View style={styles.top}>
            <Text style={styles.textLogin}>Iniciar Sesión</Text>
        </View>
        <View style={styles.containerLogin}>
        <Image style={styles.image}
            source={require('../assets/unlimited.png')} />
            <TextInput style={styles.input} 
             placeholder="Email o Usuario"
             onChangeText={text => setText(text)}
             defaultValue={text}
             />
              <TextInput style={styles.input} 
             placeholder="Contraseña"
             onChangeText={text => setText(text)}
             defaultValue={text}
             />
        <View style={styles.separador}>
        <Image style={styles.linea}
            source={require('../assets/linea4.png')} />
        <Entypo name="circular-graph" size={15} color="#6D6A6A" />  
        <Image style={styles.linea}
            source={require('../assets/linea4.png')} /> 
         </View>
                <Button
                    title="Ingresar"
                    onPress={() => navigation.navigate('App')} />
                <Button
                    title="Extra Push"
                    onPress={() => navigation.push('Home')} />   
            </View>
            </>    
    );
  };


  export default Login;