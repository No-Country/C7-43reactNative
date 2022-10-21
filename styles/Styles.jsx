import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  scrollView:{
    backgroundColor:"white",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 154,
    width: 200,
    flexDirection: "row",
    alignSelf: "center",
  },
  titulo: {
    color: "#FFFFFF",
    position: "relative",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 50,
    textShadow: "rgba(0, 0, 0, 0.25)",
  },
  input: {
    alignSelf: "center",
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 2,
    padding: 15,
    borderRadius: 15,
    position: "relative",
    color: "#6D6A6A",
    borderBottomWidth:2,
  },
  inputCreate: {
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "center",
    height: 70,
    backgroundColor:"rgba(109, 106, 106, 0.07)",
    margin: 12,
    width: 350,
    borderBottomWidth: 4,
    borderColor:"#6D6A6A",
    padding: 15,
    borderRadius: 15,
    color: "#6D6A6A",
  },

  button: {
    height: 20,
    width: 60,
    margin: 0,
    padding: 15,
    borderWidth: 2,
    border: "solid",
    borderRadius: 20,
    color: "#7B61FF",
    position: "absolute",
  },
  buttonFake: {
    height: 40,
    width: 200,
    margin: 20,
    borderWidth: 2,
    border: "solid",
    borderRadius: 20,
    color: "#FFFFFF",
  },
  redireccionar: {
    flexDirection: "row",
  },
  textoInferior: {
    color: "#FFFFFF",
    backgroundColor: "none",
    position: "relative",
    fontSize: 20,
    textShadow: "rgba(0, 0, 0, 0.25)",
  },
  fixToText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "none",
    position: "relative",
    color: "#00B2FF",
    fontSize: 20,
  },
  //Creado para probar 
  btn: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30
  }
});
  
export default styles;
