import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Card ,Avatar, IconButton, Paragraph, Title, Button } from 'react-native-paper';
import { getBussines } from '../../utilities/services';
import { StyleSheet } from 'react-native';



const RightContent = () => <Avatar.Image size={35} source={require('../../assets/logo-unlimited.png')} style={styles.avatar}/>


const CardJob = ({navigation}) => {
  const [bussinesData, setBussinesData] = useState([])
  

  useEffect (()=> {
  getBussines().then((resp) => {
    resp.data.empresas.map((empresa) => {
      setBussinesData(bussinesData => [...bussinesData, {...empresa}]);
  })
})
},[]);

  return ( 
    <>
    {bussinesData?.map((empresa, index) => {
      return ( 
    <Card key={index}>
        <Card.Title title="nombre empresa" subtitle="Localidad" right={RightContent} style={styles.rightStyle} />
        <Card.Content>
          <Title>{empresa.nombre}</Title>
          <Paragraph>Descripcion blab bla bla</Paragraph>
        </Card.Content>
        <Card.Actions> 
          <Button onPress={()=> onClick()} >No aplicar</Button>
          <Button buttonColor="#2eabe2">Aplicar</Button>
        </Card.Actions>
      </Card>
      )
    })
    }
    </>   
  )
}
const styles = StyleSheet.create({
  rightStyle:{
    padding:10,
  },
  avatar:{
    margin:10,
  }
})
 



export default CardJob;