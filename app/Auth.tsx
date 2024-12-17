import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const container = require("../assets/images/Container.png");
const Google = require("../assets/images/Google.png");

const Auth = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.auth}>
        <View style={styles.imageStyle}>
          <Image source={container} />
        </View>
        <View style={styles.bagian}>
          <Text style={styles.bagian1}>WELCOME TO REAL SCOUT</Text>
          <Text style={styles.bagian2}>Let’s Get You Closer</Text>
          <Text style={styles.bagian4}>
            To <Text style={styles.span}>Your Ideal Home</Text>
          </Text>
          <Text style={styles.bagian3}>Login to Real Scout with Google</Text>
          <View style={styles.tombol}>
          <TouchableOpacity style={styles.tombolS}>
            <Image source={Google} style={styles.gambar}/>
            <Text style={{fontSize:11,paddingLeft:10,paddingTop:3,fontFamily:"Rubik-Regular",height:23,width:174,lineHeight: 20,alignItems:"center"}}>Sign Up With Google</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0061FF0D",
    alignItems: "center",
  },
  imageStyle: {
    paddingTop: 50,
    alignItems: "center",
  },
  bagian: {
    alignItems: "center",
    position: "absolute",
    top: 580, // Naik ke atas masuk ke dalam gambar
    left: 0,
    right: 0,
    width:390,
    height:248
  },
  bagian1: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    color: "#666876",
    paddingBottom: 12,
    fontWeight: 400,
  },
  bagian2: {
    fontSize: 32,
    fontFamily: "Rubik-Bold",
    alignItems: "center",
    fontWeight: 600,
  },
  bagian4: {
    fontSize: 32,
    fontFamily: "Rubik-Bold",
    alignItems: "center",
    fontWeight: 600,
  },
  span: {
    color: "#0061FF",
    fontSize: 32,
    fontFamily: "Rubik-Bold",
    alignItems: "center",
    fontWeight: 600,
  },
  bagian3: {
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    alignItems: "center",
    color: "#666876",
    paddingTop: 12,
    fontWeight: 400,
  },
  auth: {

  },
  tombolS: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingTop: 18,
    paddingBottom:18,
    paddingRight:123,
    paddingLeft:123,
    borderRadius: 30,
    width:390,
    height:59,
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  gambar: {
    width: 22,
    height: 22,
  },
  tombol: {
    paddingTop: 25,
  }

});

export default Auth;
