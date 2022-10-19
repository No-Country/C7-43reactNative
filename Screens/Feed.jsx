import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView} from 'react-native';
import CardJob from './components/CardJob';
import { ScrollView } from 'react-native-gesture-handler';


const Feed  = ({navigation}) => {


    return (
        <>
    <SafeAreaView>
        <ScrollView>
        <View>
        <CardJob/>
        </View>
        </ScrollView>
    </SafeAreaView>
        </>
    );

}

export default Feed;