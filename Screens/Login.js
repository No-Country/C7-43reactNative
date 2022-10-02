import 'react-native-gesture-handler';
import { Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../Styles';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';



const Login = () => {
    const [text, setText] = useState('');
    return (
        <>
            <View style={styles.top}>
                <Text>Iniciar Sesión</Text>
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
            <View style={styles.botones} >
            <TouchableOpacity style={styles.botonIngresar}
                    title="Ingresar"
                    onPress={() => navigation.navigate('Home')}><Text style={styles.textoBlanco}>Ingresar</Text>
                </TouchableOpacity>               
                <TouchableOpacity style={styles.botonGoogle}
                    title="Google"
                    onPress={() => navigation.push('App')}><Text>Ingresar con Google</Text>
                </TouchableOpacity>      
            </View>
               
            </View>
        </>    
    );
  };



  export default Login;