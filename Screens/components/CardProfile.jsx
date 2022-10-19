import 'react-native-gesture-handler';
import React,  { useState } from'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';





const CardProfile = () => {

        return(
                <View>
                    <Card title= " nombre"
                        style={stylesCard.profile}            
                         mode='contained'
                         accessible="toucheable"
                       >
                    <Card.Content>
                    <Image 
                    source={require('../../assets/profile.png')} />
                       <Title>Nombre</Title>
                       <Paragraph>Profesion</Paragraph>
                        <Paragraph>Provincia</Paragraph>
                    </Card.Content>
                    </Card>
                </View>
        )
}

export default CardProfile ;