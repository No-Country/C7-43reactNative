import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import createAccountStyles from "../styles/CreateAccountStyles";
import styles from "../styles/Styles";

import { Button } from "react-native-paper";

const CrearCuenta = ({ navigation }) => {
  const [usuario, setUsuario] = useState({});
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acerca_de_mi, setAcercaDeMi] = useState("");

  let usuarioData = {
    nombre: { nombre },
    apellido: { apellido },
    email: { email },
    password: { password },
    acerca_de_mi: { acerca_de_mi },
  };

  const mostrarInfo = () => {
    setUsuario({
      ...usuarioData,
      nombre,
      apellido,
      email,
      password,
      acerca_de_mi,
    });
    console.log(usuario);
  };

  const enviarDatos = () => {
    return new Promise((resolve, reject) =>
      fetch("https://unlimited-app.herokuapp.com/api/v1/users?", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(usuario),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            return resolve(result);
          },
          (error) => {
            console.log(error);
          }
        )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={createAccountStyles.container}>
        <Text styles={createAccountStyles.label}>Nombre</Text>
        <TextInput
         style={styles.inputCreate}
          onChangeText={(nombre) => setNombre(nombre)}
          placeholder="Ingresa tu nombre"
          name="nombre"
          defaultValue=""
        />
        <Text>Apellido</Text>
        <TextInput
         style={styles.inputCreate}
          onChangeText={(apellido) => setApellido(apellido)}
          placeholder="Ingresa tu apellido"
          name="apellido"
          defaultValue=""
        />
        <Text>Email</Text>
        <TextInput
         style={styles.inputCreate}
          onChangeText={(email) => setEmail(email)}
          placeholder="Ingresa tu email"
          name="email"
          defaultValue=""
        />
        <Text>Contraseña</Text>
        <TextInput
         style={styles.inputCreate}
          onChangeText={(password) => setPassword(password)}
          placeholder="Ingresa tu password"
          name="password"
          defaultValue=""
          secureTextEntry={true}
        />
        <Text>Redactá tu CV acá</Text>
        <TextInput
         style={styles.inputCreate}
          onChangeText={(acerca_de_mi) => setAcercaDeMi(acerca_de_mi)}
          placeholder="Estudios, habilidades y experiencia laboral."
          name="acerca_de_mi"
          defaultValue=""
        />
        <Button
          mode="contained"
          onPress={() => {
            mostrarInfo();
            navigation.navigate("Profile");
            enviarDatos();
          }}
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
};

export default CrearCuenta;
