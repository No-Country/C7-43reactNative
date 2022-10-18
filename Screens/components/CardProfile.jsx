import 'react-native-gesture-handler';
import React from 'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';





const CardProfile = () => {

        return(
            <SafeAreaView>
                <View>
                    <Card title= " nombre"
                        style={stylesCard.profile}>
                    <Card.Content>
                    <Image 
                    source={require('../../assets/profile.png')} />
                       <Title>Nombre</Title>
                       <Paragraph>Profesion</Paragraph>
                        <Paragraph>Provincia</Paragraph>
                    </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
        )
}

export default CardProfile ;