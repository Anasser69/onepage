import React from "react";
import { View, StyleSheet } from "react-native";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

const Body = () => {
  return (
    <View style={styles.container}>
      <Top />
      <View style={styles.spacing} /> 
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spacing: {
    marginVertical: 40, // Adjust the vertical margin as needed
  },
});

export default Body;
