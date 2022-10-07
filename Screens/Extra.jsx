import "react-native-gesture-handler";
import * as React from "react";
import { Text } from "react-native";

const Extra = ({ route }) => {
  return <Text>Estas en {route.params.name}'s profile</Text>;
};

export default Extra;
