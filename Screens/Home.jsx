
import 'react-native-gesture-handler';
import { View, Button, ScrollView, Text } from 'react-native';





const Home = ({ navigation }) => {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  };
  
  export default Home;