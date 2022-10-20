import { StyleSheet } from "react-native";



const loginStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    containerLogin: {
        flex:8,
        alignItems:'center',
        justifyContent:'space-evenly',

      },
        top: {
          flex:1,
          width:'100%',   
          backgroundColor: '#390050',
          color:'white',
          alignItems:'center',
      },
      
      viewImage:{
        flex:3,
      },
      image:{
          height:194,
          // width:220,
          // shadowColor: 'black',
          // shadowOffset:{
          //     width: 0,
          //     height: 4,
          // },
          // shadowOpacity: 0.30,
          // shadowRadius: 4.65,
      },
      viewInput:{
        flex:2,
      },
      input:{
          width:250,
          margin:15,
          height: 30,
          alignSelf: 'center',
          textAlign: 'left',
          borderBottomColor:'#6D6A6A',
          borderBottomWidth:1,
          fontSize:15,
      },
      containerBotones:{
        flex:3,
        alignItems: 'center',
    },
      separador:{ 
          flexDirection: 'row',
          alignItems: 'center',
          width:'100%',
          alignSelf: 'center',
      },
      linea:{
          width:'20%',
          height:1,
          margin:5,
      },
      textoLogin:{
        color:'white',
        fontSize:15,
        lineHeight:15,
    },
 });

 export default loginStyles;