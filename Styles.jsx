import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 254,
    width: 250,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
  },
  titulo: {
    color: "#FFFFFF",
    marginTop: 80,
    marginBottom: 20,
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 50,
    
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margintBottom: 80,
  },
  input: {
    alignSelf: "center",
    height: 40,
    margin: 12,
    width: 265,
    borderWidth: 2,
    paddingStart:8,
    borderRadius: 15,
    fontSize:24,
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
  redireccionar: {
    flexDirection: "row",
    marginTop: 70,
    alignSelf: "center",
    padding: 2,
  },
  textoInferior: {
    color: "#FFFFFF",
    backgroundColor: "none",

    fontSize: 20,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  fixToText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    color: "#",
    fontSize: 20,
    color: "#00B2FF",
  },
  circle: {
    marginVertical: 30,
  },
});

export default styles;
