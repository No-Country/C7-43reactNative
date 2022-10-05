import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    height:'100%',
  },
    linearGradient: { 
    marginTop:10,
    height:'40%',
    padding:5,
    },
    name:{
    flex:3,
    backgroundColor: 'red',
    },
    empleo:{
      flex:2,
      backgroundColor: 'yellow',
    },
    about:{
      flex:2,
      backgroundColor: 'green',
    },
    destacado:{
      flex:2,
      backgroundColor: 'blue',
    }
});
export default profileStyles;