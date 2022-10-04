import { StyleSheet } from "react-native";



const loginStyles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'white',
    },
    containerLogin: {
        alignItems:'center',
        backgroundColor: 'white',
        justifyContent:'space-around',
      },
        textoLogin:{
          color: 'white',
      },
        top: {
          height:50,
          width:'100%',   
          backgroundColor: '#390050',
          color:'white',
          alignItems:'center',
      },
      textLogin:{
          color:'white',
          fontWeight:500,
          fontSize:32,
          lineHeight:48,
          margin:5,
      },
      image: {
          width: 100, 
          height: 150,
          margin:5,
          shadowColor: 'black',
          shadowOffset:{
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
      },
      input:{
          width:150,
          margin:5,
          height: 20,
          alignSelf: 'center',
          textAlign: 'left',
          borderBottomColor:'#6D6A6A',
          borderBottomWidth:1,
          fontSize:15,
      },
      separador:{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width:'100%',
      },
      linea:{
          height:1,
          width:'10%',
          margin:5,
      },
 });

 export default loginStyles;