import { StyleSheet } from "react-native";


const buttonStyles = StyleSheet.create({
containerBotones:{
    justifyContent: 'center',
    alignItems: 'center',
},
botonIngresar:{
    margin:5,
    borderRadius:10,
    shadowRadius:4,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    backgroundColor:'rgba(123, 97, 255, 1)',
    width:145,
    height:29,
    alignItems:'center',
},
botonGoogle:{
   backgroundColor: '#F5F5F5',
   width:217,
   height:29,
   borderRadius:10,
   margin:5,
   alignItems:'center',
}
});


export default buttonStyles;