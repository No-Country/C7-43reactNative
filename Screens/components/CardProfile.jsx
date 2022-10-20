import 'react-native-gesture-handler';
import React,  { useEffect, useState } from'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';
import { getUser } from '../../utilities/services';





const CardProfile = () => {
const [userData, setUserData] = useState({})

    useEffect (()=> {
    getUser().then((resp) => { setUserData(resp.data.user)
        
    })
    console.log(userData, "respuesta")
  },[])
            
        return (
            <View>
            <Card title='titleLarge'
                style={stylesCard.profile}            
                 mode='contained'
                accessible="toucheable"
                >
            <Card.Content>
            <Image 
            source={require('../../assets/profile.png')} />
                <Title>{userData.nombre}</Title>
                <Paragraph>{userData.apellido}</Paragraph>
                <Paragraph>{userData.email}</Paragraph>
            </Card.Content>
            </Card>
        </View>
        )    
}

export default CardProfile ;