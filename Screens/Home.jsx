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
import loginStyles from "../styles/LoginStyles";
import buttonStyles from "../styles/ButtonStyles";
import { Entypo } from "@expo/vector-icons";
import styles from "../Styles";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [ passwordInput, setPasswordInput] = useState("")

  return (
    <>
      <ImageBackground
        source={require("../assets/foto-fondo.png")}
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.container}>
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
              onChangeText={(passwordInput) => setPasswordInput(passwordInput)}
              placeholder="Contraseña"
              keyboardType="numeric"
              name="contraseña"
              secureTextEntry={true}
              defaultValue={passwordInput}
            />
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={buttonStyles.botonIngresar}
                title="Unirse"
                onPress={() =>
                  navigation.navigate("CrearCuenta", { name: "CrearCuenta" })
                }
              >
                <Text style={loginStyles.textoLogin}>Unirse</Text>
              </TouchableOpacity>

              <Entypo
                name="circular-graph"
                size={15}
                color="#6D6A6A"
                style={styles.circle}
              />
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
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Home;
