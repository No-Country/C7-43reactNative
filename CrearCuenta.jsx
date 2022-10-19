import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Checkbox, Text } from "react-native-paper";
import buttonStyles from "./styles/ButtonStyles";
import createAccountStyles from "./styles/CreateAccountStyles";
import styles from "./styles/Styles";
import loginStyles from "./styles/LoginStyles";
import { postUser } from "./utilities/services";

const CrearCuenta = ({ navigation }) => {
  const [usuario, setUsuario] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [diaNacimiento, setDiaNacimiento] = useState("");
  const [mesNacimiento, setMesNacimiento] = useState("");
  const [anioNacimiento, setAnioNacimiento] = useState("");
  const [pais, setPais] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cargoReciente, setCargoReciente] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [titulo, setTitulo] = useState("");
  const [especializacion, setEspecializacion] = useState("");
  const [anioInicio, setAnioInicio] = useState("");
  const [anioFinalizacion, setAnioFinalizacion] = useState("");
  const [buscaEmpleo, setBuscaEmpleo] = useState(false);
  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    postUser().then((resp) => {
      resp.data.usuarios.map((usuario) => {
        setUsuarioData((usuarioData) => [...usuarioData, { ...usuario }]);
      });
    });
  }, [usuario]);

  const usuarioData = {
  nombre: { nombre },
  apellido: { apellido },
  diaNacimiento: { diaNacimiento },
  mesNacimiento: { mesNacimiento },
  anioNacimiento: { anioNacimiento },
  pais: { pais },
  codigoPostal: { codigoPostal },
  ciudad: { ciudad },
  cargoReciente: { cargoReciente },
  esEstudiante: { isSelected },
  universidad: { universidad },
  titulo: { titulo },
  especializacion: { especializacion },
  anioInicio: { anioInicio },
  anioFinalizacion: { anioFinalizacion },
  buscaEmpleo: { buscaEmpleo },
}
  return (
    <>
      <View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>Nombre</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(nombre) => setNombre(nombre)}
            placeholder=""
            name="nombre"
            defaultValue={nombre}
          />
          <Text>Apellido</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(apellido) => setApellido(apellido)}
            placeholder=""
            name="apellido"
          />
          <Text>Fecha de nacimiento </Text>
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(diaNacimiento) => setDiaNacimiento(diaNacimiento)}
              placeholder="Dia"
              name="dia"
            />
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(mesNacimiento) => setMesNacimiento(mesNacimiento)}
              placeholder="Mes"
              name="mes"
            />
            <TextInput
              style={createAccountStyles.inputCreateNacimiento}
              onChangeText={(anioNacimiento) =>
                setAnioNacimiento(anioNacimiento)
              }
              placeholder="Año"
              name="año"
            />
          </View>
          <Text>Pais/Región</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(pais) => setPais(pais)}
            placeholder=""
            name="pais/region"
          />
          <Text>Código Postal</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(codigoPostal) => setCodigoPostal(codigoPostal)}
            placeholder=""
            name="codigo postal"
          />
          <Text>Ciudad</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(ciudad) => setCiudad(ciudad)}
            placeholder=""
            name="ciudad"
          />
          <Text>Cargo más reciente</Text>
          <TextInput
            style={createAccountStyles.inputCreate}
            onChangeText={(cargoReciente) => setCargoReciente(cargoReciente)}
            placeholder=""
            name="cargo mas reciente"
          />
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={createAccountStyles.checkbox}
            />
            <Text style={styles.label}>Soy estudiante</Text>
          </View>
          <Text style={styles.label}>¿Estás buscando empleo?</Text>
          <View style={createAccountStyles.inputCreateNacimientoArea}>
            <Checkbox
              value={buscaEmpleo}
              onValueChange={setBuscaEmpleo}
              style={createAccountStyles.checkbox}
            />
            <Text style={styles.label}>Sí</Text>
          </View>
          {!isSelected ? (
            <View style={loginStyles.containerBotones}>
              <TouchableOpacity
                style={buttonStyles.botonIngresar}
                title="Registrarse"
                onPress={
                  () => navigation.navigate("Login", { name: "Login" })
                  //Agregar también la función que guarde/reciba/envie los datos del input a la base de datos
                }
                accessibilityLabel="Login"
              >
                <Text>Registrarse</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
          {isSelected ? (
            <>
              <Text>Universidad o centro de estudios</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(universidad) => setUniversidad(universidad)}
                placeholder=""
                name="universidad"
              />
              <Text>Titulo</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(titulo) => setTitulo(titulo)}
                placeholder=""
                name="titulo"
              />
              <Text>Especialización</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(especializacion) =>
                  setEspecializacion(especializacion)
                }
                placeholder=""
                name="especializacion"
              />
              <Text>Año de inicio</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(anioInicio) => setAnioInicio(anioInicio)}
                placeholder=""
                name="año de inicio"
              />
              <Text>Año de finalización</Text>
              <TextInput
                style={createAccountStyles.inputCreate}
                onChangeText={(anioFinalizacion) =>
                  setAnioFinalizacion(anioFinalizacion)
                }
                placeholder=""
                name="año de finalizacion"
              />
              <View style={loginStyles.containerBotones}>
                <TouchableOpacity
                  style={buttonStyles.botonIngresar}
                  title="Registrarse"
                  onPress={() => {
                    getUser.data.post({ nombre }).then(({ data }) => {
                      setPosts((_posts) => [..._posts, data]);
                    });
                    // navigation.navigate("Login", { name: "Login" })
                  }}
                  accessibilityLabel="Login"
                >
                  <Text>Registrarse</Text>
                </TouchableOpacity>
              </View>
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
