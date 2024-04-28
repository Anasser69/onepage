import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Header/outlined.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Header/voice.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        
          <Image
            source={require("../assets/Header/logo.png")}
            style={styles.gridItem}
          />
        
        <TouchableOpacity>
          <Image
            source={require("../assets/Header/people.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Header/alert.png")}
            style={styles.gridItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(38, 43, 51, 0.4)",
    height: 105,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24, // Added border radius for the bottom
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

export default Header;
