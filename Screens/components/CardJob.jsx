import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Card ,Avatar, IconButton, Paragraph, Title, Button } from 'react-native-paper';
import { getBussines, getOffer } from '../../utilities/services';
import { StyleSheet, Text } from 'react-native';



const RightContent = () => <Avatar.Image size={35} source={require('../../assets/logo-unlimited.png')} style={styles.avatar}/>


const CardJob = ({navigation}) => {
  const [ofertaData, setOfertaData] = useState([])
  useEffect (()=> {
    getOffer().then((resp) => {
    resp.data.ofertas.map((oferta) => {
      setOfertaData(ofertaData => [...ofertaData, {...oferta}]);
      
  })
})
console.log(ofertaData, "la data")
},[]);

  return ( 
    <>
    {ofertaData?.map((oferta, index) => {
      return ( 
    <Card key={index}>
        <Card.Title title={oferta.empresa.nombre} subtitle={oferta.empresa.ubicacion} right={RightContent} style={styles.rightStyle} />
        <Card.Content>
          <Title>{oferta.nombre}</Title>
          <Paragraph>{oferta.rol}</Paragraph>
          <Paragraph>{oferta.tipo_contratacion}</Paragraph>
        </Card.Content>
        <Card.Actions> 
          <Button buttonColor='#2eabe2'>Aplicar</Button>
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