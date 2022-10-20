import 'react-native-gesture-handler';
import React,  { useEffect, useState } from'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';
import { getUser } from '../../utilities/services';





const CardProfile = () => {
    const [profileData, setProfileData] = useState([])

    useEffect (()=> {
    getUser().then((resp) => {
      resp.data.users.map((usuario) => {
        setProfileData(profileData => [...profileData, {...usuario}]);
    })
  })
  },[]);
        return(
            <>
            {profileData?.map((usuario, index) => {
                return (
                    <View>
                    <Card title='nombre'
                    key={index}
                        style={stylesCard.profile}            
                         mode='contained'
                         accessible="toucheable"
                       >
                    <Card.Content>
                    <Image 
                    source={require('../../assets/profile.png')} />
                       <Title>{usuario.nombre}</Title>
                       <Paragraph>{usuario.email}</Paragraph>
                        <Paragraph>Provincia</Paragraph>
                    </Card.Content>
                    </Card>
                </View>
                )
            })
            }     
            </>     
        )
}

export default CardProfile ;