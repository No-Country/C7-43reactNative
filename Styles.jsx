import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: 740,
    width:360,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 154,
    width: 200,
    flexDirection: "row",
    alignSelf: "center",
  },
  titulo: {
    color: "#FFFFFF",
    backgroundColor: "none",
    position: "relative",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 50,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
