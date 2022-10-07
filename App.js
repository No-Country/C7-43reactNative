import Home from "./Views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./Styles";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.appContainer}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
