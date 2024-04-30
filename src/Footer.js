import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const Footer = () => {
   const [fontsLoaded] = useFonts({
    //  Almaria: require("../../assets/Fonts/Almarai-Regular.ttf"),
     "Almarai-Bold": require("../assets/Fonts/Almarai-Bold.ttf"),
   });
   if (!fontsLoaded) {
     return null; // or a loading indicator
   }
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.gridItemContainer}>
          <TouchableOpacity style={styles.imglol}>
            <Image
              source={require("../assets/Footer/store.png")}
              style={styles.gridItem}
            />
          </TouchableOpacity>
          <Text style={styles.gridText}>المتجر</Text>
        </View>
        <View style={styles.gridItemContainer}>
          <TouchableOpacity style={styles.imglol}>
            <Image
              source={require("../assets/Footer/commu.png")}
              style={styles.gridItem}
            />
          </TouchableOpacity>
          <Text style={styles.gridText}>المجتمع</Text>
        </View>
        <View style={styles.gridItemContainer}>
          <TouchableOpacity style={styles.imglol}>
            <Image
              source={require("../assets/Footer/main.png")}
              style={styles.gridItem}
            />
          </TouchableOpacity>
          <Text style={styles.gridText}>الرئيسيه</Text>
        </View>
        <View style={styles.gridItemContainer}>
          <TouchableOpacity style={styles.imglol}>
            <Image
              source={require("../assets/Footer/legue.png")}
              style={styles.gridItem}
            />
          </TouchableOpacity>
          <Text style={styles.gridText}>الدوريات</Text>
        </View>
        <View style={styles.gridItemContainer}>
          <TouchableOpacity style={styles.imglol}>
            <Image
              source={require("../assets/Footer/chat.png")}
              style={styles.gridItem}
            />
          </TouchableOpacity>
          <Text style={styles.gridText}>الدردشة</Text>
        </View>
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
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
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
  gridText: {
    marginTop: -5,
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Almarai-Bold",
  },
  gridItemContainer: {
    alignItems: "center",
  },
});
