import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const dataCard = [
  { id: 1, image: require("../assets/images/card.png") },
  { id: 2, image: require("../assets/images/card1.png") },
];

const Card = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {dataCard.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.gambar} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingLeft:20,
  },
  card: {
    width:280,
    height:400,
    alignContent:"center",
    transform: [{ translateY: -37}],
  },
  gambar: {
    
  }
});

export default Card;
