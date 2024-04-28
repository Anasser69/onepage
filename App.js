import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Body from "./src/Body";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/Display.png")}
      style={styles.imagebackground}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Body style={styles.body} />
        <Footer />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "rgba(19, 21, 20, 1)",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight || 0,
    // Distribute space evenly between header and footer
  },
  body: {
    flex: 1, // Ensure that body takes up remaining space between header and footer
  },
});
