import 'react-native-gesture-handler';
import React from 'react';
import { Text, View} from 'react-native';
import profileStyles from '../styles/ProfileStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Profile  = ({navigation}) => {
    return(
    <>
        <View>
            <LinearGradient  
            colors={['#390050', 'white' ]}
            style={profileStyles.linearGradient}>
                <Text>
                    Profile
                </Text>
            </LinearGradient>
        </View>
    </>
    )
}


export default Profile;