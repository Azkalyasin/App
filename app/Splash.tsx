import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

const gambar = require("../assets/images/Logo.png");

const Splash = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splash}>
      <Image source={gambar} style={styles.logo} />
        <Text style={styles.title}>REAL SCOUT</Text>
        <Text style={styles.subtitle}>CONNECTING YOU TO YOUR IDEAL HOME</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    fontFamily: "Rubik-Regular"
  },
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0061ff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#666876",
  },
});

export default Splash;
