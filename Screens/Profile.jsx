import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CardProfile from './components/CardProfile';
import GreyCard from './components/GreyCard';
import { getUser } from '../utilities/services';


const Profile  = ({navigation}) => {

    return(
    
    <SafeAreaView style={styles.container}>
            <ScrollView>
            <View>
            <LinearGradient  
                colors={['rgba(57, 0, 80, 0.62)', 'transparent' ]}>
                <CardProfile/>
            </LinearGradient>
                
                    <GreyCard/>  
                    <GreyCard/>  
                
            </View>
            </ScrollView>
    </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white',
    },
  });

export default Profile;