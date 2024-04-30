import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const Bottom = () => {
  const [fontsLoaded] = useFonts({
    "Almaria": require("../../assets/Fonts/Almarai-Regular.ttf"),
    "Almarai-Bold": require("../../assets/Fonts/Almarai-Bold.ttf"),
  });
    if (!fontsLoaded) {
      return null; // or a loading indicator
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.text1}>
        <Text style={styles.text11}> العب الان</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text2}>
        <Text style={styles.text22}> لعبة ودية</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text2}>
        <Text style={styles.text22}>انشاء جلسة</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text2}>
        <Text style={styles.text22}> قائمة الجلسات</Text>
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
    gap: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    width: 300,
    height: 56,
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(239, 176, 84, 1)",
    elevation: 5,
  },
  text2: {
    width: 300,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 8,
    backgroundColor: "rgba(77, 86, 102, 1)",
    shadowColor: "rgba(253, 245, 233, 0.1)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11.6,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text11: {
    color: " rgba(253, 245, 233, 1)",
    fontFamily: "Almarai-Bold",
  },
  text22: {
    color: "rgba(242, 190, 114, 1)",
    fontFamily: "Almarai-Bold",
  },
});

export default Bottom;
