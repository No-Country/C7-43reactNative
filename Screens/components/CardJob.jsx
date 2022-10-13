import 'react-native-gesture-handler';
import React from 'react';
import { Card ,Avatar, IconButton, Paragraph, Title, Button } from 'react-native-paper';


const RightContent = props => <Avatar.Icon {...props} icon="cursor-default-click"  onPress={() => {}} />
const CardJob = () => {
  return (
    <Card>
    <Card.Title title="nombre empresa" subtitle="Localidad" right={RightContent} />
    <Card.Content>
      <Title>Oferta Trabajo</Title>
      <Paragraph>Descripcion blab bla bla</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>No aplicar</Button>
      <Button>Aplicar</Button>
    </Card.Actions>
  </Card>
  )
 
}
export default CardJob;