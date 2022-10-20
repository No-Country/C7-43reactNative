import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import stylesCard from '../../styles/StylesCard';
import { ScrollView } from 'react-native-gesture-handler';
import { getUser } from '../../utilities/services';


const GreyCard = () => {
    const [userData, setUserData] = useState({})

    useEffect (()=> {
    getUser().then((resp) => { setUserData(resp.data.user)
        
    })
    console.log(userData, "respuesta")
  },[])
    return(
            <Card title= " nombre"
                accessible="toucheable"
                style={stylesCard.grey}>
                <Paragraph>{userData.acerca_de_mi}</Paragraph>
            </Card>
    )
}

export default GreyCard ;