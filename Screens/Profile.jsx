import "react-native-gesture-handler";
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardProfile from "./components/CardProfile";
import GreyCard from "./components/GreyCard";
import buttonStyles from "../styles/ButtonStyles";

const Profile = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <LinearGradient colors={["rgba(57, 0, 80, 0.62)", "transparent"]}>
            <CardProfile />
          </LinearGradient>
          <GreyCard />
         
          <View style={styles.button}>
          <Image
              source={require("../assets/logo-unlimited.png")}
              style={styles.logo}
            />
          <TouchableOpacity style={buttonStyles.botonGoogle}
              title="Ofertas Trabajo"
              onPress={() => navigation.navigate('Feed')}><Text>Ofertas trabajo </Text>
          </TouchableOpacity>    
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }
});

export default Profile;
