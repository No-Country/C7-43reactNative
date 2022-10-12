import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import { Card } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';


const GreyCard = () => {

    return(
        <SafeAreaView>
            <View>
                <Card title= " nombre"
                    style={stylesCard.grey}>
               <Text> textos que renderizan</Text>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default GreyCard ;