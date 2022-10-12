import 'react-native-gesture-handler';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import profileStyles from '../styles/ProfileStyles';
import { LinearGradient } from 'expo-linear-gradient';
import CardProfile from './components/CardProfile';
import GreyCard from './components/GreyCard';



const Profile  = ({navigation}) => {
    return(
    <>
    <SafeAreaView style={profileStyles.container}>
        <ScrollView>
        <View style={profileStyles.linearGradient}>
        <LinearGradient  
        colors={['rgba(57, 0, 80, 0.62)', 'transparent' ]}>
            <View>
              
            </View>
            <CardProfile/>
        </LinearGradient>
         </View>
            <View  style={profileStyles.empleo}>
               <GreyCard/>    
            </View>
            <View style={profileStyles.about}>
            <GreyCard/>    
            </View>
            <View  style={profileStyles.destacado}>
            <GreyCard/>         
            </View>
        </ScrollView>
    </SafeAreaView>
    </>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
  },
});

export default Profile;