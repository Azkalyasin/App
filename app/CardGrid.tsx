import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

const dataCard = [
  { id: "1", image: require("../assets/images/card2.png") },
  { id: "2", image: require("../assets/images/card3.png") },
  { id: "3", image: require("../assets/images/card4.png") },
  { id: "4", image: require("../assets/images/card5.png") },
];

const CardGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={dataCard}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} 
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop:20,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 170, // Sesuai gambar referensi
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
    alignItems:"center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Memastikan gambar memenuhi kartu tanpa terdistorsi
  },
});

export default CardGrid;
