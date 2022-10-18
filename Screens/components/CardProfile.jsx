import 'react-native-gesture-handler';
import React,  { useState } from'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';





const CardProfile = () => {




    
    const [widthType, setWidthType] = useState("auto");
    const [heightType, setHeightType] = useState("auto");
    
        return(
            <SafeAreaView>
                <View>
                    <Card title= " nombre"
                        style={stylesCard.profile}            
                         mode='contained'
                         accessible="toucheable"
                         widthType={widthType}
                        heightType={heightType}
                        widthValues={["auto", 300, "80%"]}
                        heightValues={["auto", 200, "60%"]}
                        setWidthType={setWidthType}
                        setHeightType={setHeightType}>
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