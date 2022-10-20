import { StyleSheet } from "react-native";

const createAccountStyles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputCreate: {
    width: 289,
    marginBottom: 21,
    height: 32,
    borderRadius: 10,
    alignSelf: "center",
    textAlign: "left",
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 25,
    backgroundColor:"rgba(109, 106, 106, 0.07)",
    elevation:20,
    borderColor: "rgba(0, 0, 0, 0.25)",
  },
  inputCreateNacimientoArea: {
    flexDirection: "row",
  },
  checkbox:{
    alignSelf: "left",
  },
    label: {
      margin: 8,
   },
  
  inputCreateNacimiento: {
    width: 90,
    marginBottom: 21,
    height: 32,
    borderRadius: 10,
    borderBottomWidth: 3,
    alignSelf: 'stretch',
    textAlign:'center',
    borderWidth: 1,
    fontSize: 25,
    borderColor: "rgba(0, 0, 0, 0.25)",
  },
  top: {
    flex: 1,
    width: "100%",
    backgroundColor: "#390050",
    color: "white",
    alignItems: "center",
  },
});

export default createAccountStyles;
