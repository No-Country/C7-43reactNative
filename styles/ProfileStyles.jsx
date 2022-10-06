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
      flex:1,
    },
    about:{
      backgroundColor: 'green',
      flex:1,
    },
    destacado:{
      backgroundColor: 'blue',
      flex:1,
    },

});
export default profileStyles;