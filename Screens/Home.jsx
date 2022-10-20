import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  Button,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../Styles";
import { Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [ passwordInput, setPasswodInput] = useState("")

  return (
    
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../assets/foto-fondo.png")}
          style={styles.image}
          resizeMode="cover"
        />

            <Image
              source={require("../assets/logo-unlimited.png")}
              style={styles.logo}
            />

            <Text style={styles.titulo}> Únete ahora</Text>
            <TextInput
              style={styles.input}
              onChangeText={(input) => setInput(input)}
              placeholder="Email"
              name="email"
              defaultValue={input}
              />

            
            <TextInput
              style={styles.input}
              onChangeText={(passwordInput) => setPasswodInput(passwordInput)}
              placeholder="Contraseña"
              keyboardType="numeric"
              name="contraseña"
              secureTextEntry={true}
              />
            <View style={styles.fixToText}>
              <Button
                style={styles.button}
                title="Unirse"
                onPress={() =>
                  navigation.navigate("CrearCuenta", { name: "CrearCuenta" })
                }
                accessibilityLabel="Crear una cuenta"
                />
              <Entypo name="circular-graph" size={15} color="#6D6A6A" />
            </View>
            <View style={styles.redireccionar}>
              <Text style={styles.textoInferior}>¿Ya estás en Unlimited?</Text>
              <Text
                onPress={() => navigation.navigate("Login", { name: "Login" })}
                style={styles.content}
                >
                Iniciar sesión
              </Text>
          </View>                  
      </ScrollView>

  );
};

export default Home;
