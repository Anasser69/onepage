import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Bottom = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Body/play.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Body/demo.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Body/session.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Body/list.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(38, 43, 51, 0.4)",
    height: 330, 
    borderRadius: 16, 
    padding: 24, 
    paddingHorizontal: 8, 
    gap: 1,
    justifyContent: "center", 
    alignItems: "center",
  },

});

export default Bottom;
