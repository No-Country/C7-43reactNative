import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView} from 'react-native';
import CardJob from './components/CardJob';


const Feed  = ({navigation}) => {
    return (
        <>
    <SafeAreaView>
        <View>
        <CardJob/>
        </View>
    </SafeAreaView>
        </>
    );

}

export default Feed;