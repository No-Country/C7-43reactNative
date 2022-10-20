import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  },
  container: {
    flex: 1,

  },

  image: {
    width: '100%', height: '100%',
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position:"absolute",
    resizeMode: 'cover',
  },
  logo: {
    height: 154,
    width: 200,
    flexDirection: "row",
    alignSelf: "center",
    zIndex:20,
  },
  titulo: {
    color: "#FFFFFF",
    backgroundColor: "none",
    position: "relative",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 50,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margintBottom:80,
  },
  input: {
    alignSelf: "center",
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 2,
    padding: 8,
    borderRadius: 15,

    borderColor: "#FAFAFA",
    backgroundColor: "#FFFFFF",
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
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin:10,
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
 
});

export default styles;
