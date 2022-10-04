import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import profileStyles from '../styles/ProfileStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Profile  = ({navigation}) => {
    return(
    <>
    <SafeAreaView style={profileStyles.container}>
    <View>
        <LinearGradient  
        colors={['#390050','rgba(57, 0, 80, 0.62)', 'transparent' ]}
        style={profileStyles.linearGradient}>
            <Text>
                Profile
            </Text>
        </LinearGradient>
    </View>
    </SafeAreaView>
    </>
    )
}


export default Profile;