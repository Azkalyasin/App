import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";

const Tab = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  const [selectedButton, setSelectedButton] = useState("All");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      <View style={styles.container}>
        {["All", "House", "Villa", "Apartments", "Other"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              selectedButton === item ? styles.selectedButton : null, 
            ]}
            onPress={() => setSelectedButton(item)}
          >
            <Text
              style={[
                styles.tabText,
                selectedButton === item ? styles.selectedText : null, 
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop:20
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingLeft:20,
    width:458,
    height:41
  },
  tabButton: {
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#0061FF", 
  },
  tabText: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    color: "#fff", // Warna teks putih jika tombol dipilih
    fontFamily: "Rubik-Regular",
  },
});

export default Tab;
