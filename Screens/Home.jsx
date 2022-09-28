
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../Styles';




const Home = ({ navigation, route }) => {
    return (
      <View>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('Home', { name: 'Home' })
          }
        />
        <Button
          title="Login"
          onPress={() =>
            navigation.navigate('Login', { name: 'Login' })
          }
        />
        <Button
          title="Extra"
          onPress={() =>
            navigation.navigate('Extra')
          }
        />
        <Text>{route.params?.fromChild || "Param not provided yet"}</Text>
      </View>
    );
  };
  
  export default Home;