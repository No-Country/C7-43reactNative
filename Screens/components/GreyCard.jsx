import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';
import { ScrollView } from 'react-native-gesture-handler';


const GreyCard = () => {

    return(
            <Card title= " nombre"
                accessible="toucheable"
                style={stylesCard.grey}>
                <Paragraph>Textos que renderizan</Paragraph>
            </Card>
    )
}

export default GreyCard ;