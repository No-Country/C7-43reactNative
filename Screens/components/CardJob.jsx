import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Card ,Avatar, IconButton, Paragraph, Title, Button } from 'react-native-paper';
import { getBussines } from '../../utilities/services';


const RightContent = props => <Avatar.Icon {...props} icon="cursor-default-click"  onPress={() => {}} />


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
    {bussinesData?.map((empresa) => {
      return ( 
    <Card>
        <Card.Title title="nombre empresa" subtitle="Localidad" right={RightContent} />
        <Card.Content>
          <Title>{empresa.nombre}Oferta Trabajo</Title>
          <Paragraph>Descripcion blab bla bla</Paragraph>
        </Card.Content>
        <Card.Actions> 
          <Button onPress={()=> onClick()}>No aplicar</Button>
          <Button>Aplicar</Button>
        </Card.Actions>
      </Card>
      )
    })
    }
    </>   
  )
}
 
 
export default CardJob;