import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";

const Top = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textView1}>
        <TouchableOpacity>
          <Image source={require("../../assets/Body/sub.png")} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text> انت غير مشترك ! </Text>
          <Image source={require("../../assets/Body/alert.png")} />
        </View>
      </View>
      <View style={styles.gap} />
      <View style={styles.textView2}>
        <Image source={require("../../assets/Body/userprof.png")} />
        <View style={styles.second}>
          <View style={styles.imgright}>
            <Image source={require("../../assets/Body/heart.png")}></Image>
            <Image source={require("../../assets/Body/honor.png")}></Image>
          </View>
          <View style={styles.imgmiddle}>
            <Image source={require("../../assets/Body/began.png")}></Image>
          </View>
          <View style={styles.imgleft}>
            <Image source={require("../../assets/Body/stars.png")}></Image>
            <Image source={require("../../assets/Body/gold.png")}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  textView1: {
    flexDirection: "row", 
    width: 343, 
    height: 40, 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 8,
    backgroundColor: "rgba(38, 43, 51, 1)", // Set background color
    justifyContent: "space-between", // Align items with space between them
    alignItems: "center", // Center content vertically
  },
  textContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
  },
  gap: {
    height: 16,
  },
  textView2: {
    width: 343, // Set width to 343px
    height: 160, // Set height to 148px
    borderRadius: 16, // Set border radius to 16px
    backgroundColor: "rgba(38, 43, 51, 0.4)", // Set background color
    alignItems: "center",
  },
  text1: {
    width: 75, // Set width to 75px
    height: 18, // Set height to 18px
    borderRadius: 8,
    backgroundColor: "rgba(38, 43, 51, 1)",
    alignItems: "center",
    justifyContent:'center'
  },
  second: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Distribute items along the row with space between them
    flex: 1, // Expand to fill the available space
    paddingHorizontal: 20, // Add horizontal padding to create some gap
    marginTop: 10, // Add marginTop for spacing
  },
  imgright: {
    flexDirection: "column", // Align items vertically
    flex: 1, // Each child component takes 1/3 of the available space
    alignItems: "center", // Center items horizontally
  },
  imgmiddle: {
    flexDirection: "row", // Align items horizontally
    flex: 1, // Each child component takes 1/3 of the available space
    justifyContent: "center", // Align items to the center of the row
  },
  imgleft: {
    flexDirection: "column", // Align items vertically
    flex: 1, // Each child component takes 1/3 of the available space
    alignItems: "center", // Center items horizontally
  },
});

export default Top;