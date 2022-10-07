import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
} from "react-native";
import styles from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-web";

const Home = ({ navigation }) => {
  const [input, setInput] = useState("");

  return (
    
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ImageBackground
            source={require("../assets/foto-fondo.png")}
            style={styles.image}
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
            onChangeText={(input) => setInput(input)}
            placeholder="Email"
            name="email"
            defaultValue={input}
          />
          <TextInput
            style={styles.input}
            onChangeText={(input) => setInput(input)}
            placeholder="Contraseña"
            keyboardType="numeric"
            name="contraseña"
          />
          <View style={styles.fixToText}>
            <Button
              style={styles.button}
              title="Unirse"
              onPress={() => navigation.navigate("Login", { name: "Login" })}
              accessibilityLabel="Crear una cuenta"
            />
            <Button
              style={styles.buttonFake}
              onPress={() => navigation.navigate("Profile", { name: "Profile" })}
              title="Unirse con google..."
              accessibilityLabel="Crear cuenta a través de tu cuenta de Google"
            />
            <Entypo name="circular-graph" size={15} color="#6D6A6A" />
          </View>
          <View style={styles.redireccionar}>
            <Text style={styles.textoInferior}>¿Ya estás en Unlimited?</Text>
            <Text style={styles.content}>Iniciar sesión</Text>
          </View>
        </ScrollView>
      </View>
    
  );
};

export default Home;
