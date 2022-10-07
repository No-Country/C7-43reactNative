import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Card } from "react-native-paper";

const CardProfile = () => {
  return (
    <SafeAreaView>
      <View>
        <Card title=" nombre">
          <Text>informacion</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default CardProfile;
