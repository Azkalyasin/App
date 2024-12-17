import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Card from "./Card";

const muka = require("../assets/images/image.png");
const notif = require("../assets/images/notife.png");
const iconserch = require("../assets/images/Search.png");
const iconfilter = require("../assets/images/Filter.png");

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          {/* Header */}
          <View style={styles.head}>
            <Image source={muka} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.username}>Adrian Hajdin</Text>
            </View>
            <TouchableOpacity>
              <Image source={notif} style={styles.notifIcon} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Image source={iconserch} style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search something" placeholderTextColor="#8C8E98" value={searchText} onChangeText={setSearchText} />
            <TouchableOpacity>
              <Image source={iconfilter} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>

          {/*featured*/}
          <View style={styles.feature}>
            <Text style={{ fontWeight: 600, fontSize: 20, fontFamily: "Rubik-Regular", color: "#191D31" }}>Featured</Text>
            <Text style={{ fontWeight: 600, fontSize: 16, fontFamily: "Rubik-Regular", color: "#0061FF" }}>See All</Text>
          </View>
        </View>
        {/*Card*/}
        <View>
          <Card></Card>
        </View>
        {/*Rocomendation*/}
        <View style={styles.recomend}>
          <Text style={{ fontWeight: 600, fontSize: 20, fontFamily: "Rubik-Regular", color: "#191D31" }}>Our Recomendation</Text>
          <Text style={{ fontWeight: 600, fontSize: 16, fontFamily: "Rubik-Regular", color: "#0061FF" }}>See All</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  head: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  greeting: {
    fontSize: 12,
    color: "#8C8E98",
    fontFamily: "Rubik-Regular",
  },
  username: {
    fontSize: 16,
    color: "#191D31",
    fontFamily: "Rubik-Bold",
    marginTop: 3,
  },
  notifIcon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFD",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 60,
    marginTop: 20,
    justifyContent: "space-between",
  },
  searchIcon: {
    width: 15,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#191D31",
    fontFamily: "Rubik-Regular",
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  feature: {
    width: "100%",
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  recomend: {
    width: "100%",
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  }
});

export default Home;
