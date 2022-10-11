import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  container:{
    flex:1,
  },
  linearGradient: { 
    marginTop:10,
    padding:5,
    flex:2,
    },
    name:{
    backgroundColor: 'red',
    flex:1,
    },
    empleo:{
      backgroundColor: 'yellow',
      height:200,
    },
    about:{
      backgroundColor: 'green',
      height:300,
    },
    destacado:{
      backgroundColor: 'blue',
      height:300,
    },

});
export default profileStyles;