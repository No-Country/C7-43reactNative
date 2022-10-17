import React, { useState } from "react";
import { View, CheckBox } from "react-native";
import { ScrollView, TextInput,TouchableOpacity } from "react-native-gesture-handler";
import { Button, Text } from "react-native-paper";
import buttonStyles from "./styles/ButtonStyles";
import createAccountStyles from "./styles/createAccountStyles";
import styles from "./styles/Styles";
import loginStyles from "./styles/LoginStyles";
const CrearCuenta = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [isSelected, setSelection] = useState(false);
  return (
    <>
      <View style={styles.containerApp}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>Nombre</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="nombre"
            defaultValue={input}
          />
          <Text>Apellido</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="apellido"
          />
          <Text>Fecha de nacimiento </Text>
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(input) => setInput(input)}
              placeholder="Dia"
              name="dia"
            />
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(input) => setInput(input)}
              placeholder="Mes"
              name="mes"
            />
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(input) => setInput(input)}
              placeholder="Año"
              name="año"
            />
          </View>
          <Text>Pais/Región</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="pais/region"
          />
          <Text>Código Postal</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="codigo postal"
          />
          <Text>Ciudad</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="ciudad"
          />
          <Text>Cargo más reciente</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(input) => setInput(input)}
            placeholder=""
            name="cargo mas reciente"
          />
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={createAccountStyles.checkbox}
            />
            <Text style={styles.label}>Soy estudiante</Text>
          </View>
          <Text style={styles.label}>¿Estás buscando empleo?</Text>
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <CheckBox style={createAccountStyles.checkbox} />
            <Text style={styles.label}>Sí</Text>
          </View>
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <CheckBox
              style={createAccountStyles.checkbox}
              
              onValueChange={() => {}}
              
            />{" "}
            
            <Text style={styles.label}>Por ahora no</Text>
          </View>
          <View style={loginStyles.containerBotones} >
          <TouchableOpacity
          style={buttonStyles.botonIngresar}
          title="Registrarse"
          onPress={() => navigation.navigate("Login", { name: "Login" })}
          accessibilityLabel="Login"
          ><Text>Registrarse</Text></TouchableOpacity>
          </View>
          {isSelected ? (
            <>
              <Text>Universidad o centro de estudios</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(input) => setInput(input)}
                placeholder=""
                name="universidad"
              />
              <Text>Titulo</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(input) => setInput(input)}
                placeholder=""
                name="titulo"
              />
              <Text>Especialización</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(input) => setInput(input)}
                placeholder=""
                name="especializacion"
              />
              <Text>Año de inicio</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(input) => setInput(input)}
                placeholder=""
                name="año de inicio"
              />
              <Text>Año de finalización</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(input) => setInput(input)}
                placeholder=""
                name="año de finalizacion"
              />
            </>
          ) : (
            <> </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default CrearCuenta;
