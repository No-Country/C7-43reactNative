import 'react-native-gesture-handler';
import React from 'react';
import { Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import loginStyles from '../styles/LoginStyles';
import buttonStyles from '../styles/ButtonStyles'
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';



const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState('');
    const [ textPass, setTextPass] = useState('');
    return (
        <>
        <View style={loginStyles.container}>
            <View style={loginStyles.top}>
                <Text>Iniciar Sesión</Text>
            </View>
            <View style={loginStyles.containerLogin}>
                <View  style={loginStyles.viewImage}>
                <Image style={loginStyles.image}
                source={require('../assets/unlimited.png')} />
                </View>
                <View style={loginStyles.viewInput}>
                <TextInput style={loginStyles.input} 
                    placeholder="Email o Usuario"
                    onChangeText={onChangeText}
                    value={text}
                    />
                    <TextInput style={loginStyles.input} 
                    placeholder="Contraseña"
                    onChangeText={setTextPass}
                    value={textPass}
                    />
                </View>
                <View style={loginStyles.containerBotones} >
                <TouchableOpacity style={buttonStyles.botonIngresar}
                        title="Ingresar"
                        onPress={() => navigation.navigate('Profile')}><Text style={loginStyles.textoLogin}>Ingresar</Text>
                    </TouchableOpacity> 
                    <View style={loginStyles.separador}>
                        <Image style={loginStyles.linea}
                            source={require('../assets/linea4.png')} />
                        <Entypo name="circular-graph" size={15} color="#6D6A6A" />  
                        <Image style={loginStyles.linea}
                        source={require('../assets/linea4.png')} /> 
                    </View>              
                    <TouchableOpacity style={buttonStyles.botonGoogle}
                        title="Google"
                        onPress={() => navigation.push('Home')}><Text>Ingresar con Google</Text>
                    </TouchableOpacity>      
                </View>
            </View>
        </View>
        </>    
    );
  };



  export default Login;