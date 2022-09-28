import { StyleSheet } from "react-native";


  const styles = StyleSheet.create({
    containerLogin: {
      alignItems:'center',
      backgroundColor: 'white',
      justifyContent:'space-around',
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
    }
  });

  export default styles;