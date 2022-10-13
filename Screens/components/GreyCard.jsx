import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';


const GreyCard = () => {

    return(
        <SafeAreaView>
            <View>
                <Card title= " nombre"
                    style={stylesCard.grey}>
              <Paragraph>Textos que renderizan</Paragraph>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default GreyCard ;