import "react-native-gesture-handler";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import profileStyles from "../styles/ProfileStyles";
import { LinearGradient } from "expo-linear-gradient";
import CardProfile from "./components/CardProfile";

const Profile = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={profileStyles.container}>
        <View style={profileStyles.linearGradient}>
          <LinearGradient colors={["rgba(57, 0, 80, 0.62)", "transparent"]}>
            <Text>Profile</Text>
            <View>
              <Image source={require("../assets/profile.png")} />
            </View>
          </LinearGradient>
        </View>
        <View style={profileStyles.name}>
          <CardProfile />
        </View>
        <View style={profileStyles.empleo}>
          <Text>Busco empleo</Text>
        </View>
        <View style={profileStyles.about}>
          <Text>acerca de mi</Text>
        </View>
        <View style={profileStyles.destacado}>
          <Text>Destacado</Text>
        </View>
        <View>
          <Text> botonera abajo</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
