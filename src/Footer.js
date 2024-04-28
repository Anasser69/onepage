import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Footer/store.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Footer/commu.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Footer/main.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Footer/legue.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Footer/chat.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(38, 43, 51, 0.4)",
    height: 105,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 24, // Updated border radius for the top
    borderTopRightRadius: 24, // Updated border radius for the top
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  gridItem: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
