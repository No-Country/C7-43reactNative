import { StyleSheet } from "react-native";


  const styles = StyleSheet.create({
    containerLogin: {
      alignItems:'center',
      backgroundColor: 'white',
      justifyContent:'space-around',
    },
    textoBlanco:{
        color: 'white',
    },
    containerApp: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      top: {
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
    },
    input:{
        margin:5,
        flex:2,
        alignSelf: 'center',
        textAlign: 'left',
        borderBottomColor:'#6D6A6A',
        borderBottomWidth:1,
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
    botones:{
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

  export default styles;