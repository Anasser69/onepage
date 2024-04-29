import React ,{ useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";



const Top = () => {
  const [imageUri, setImageUri] = useState(
    require("../../assets/Body/eagle.jpeg")
  );
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri({ uri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textView1}>
        <TouchableOpacity style={styles.subb}>
          <Text style={styles.sub}>اشترك الان</Text>
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
            <View style={styles.imgContainer}>
              <Text style={styles.textright}>0</Text>
              <Image
                source={require("../../assets/Body/heart.png")}
                // style={styles.imgIcon}
              />
            </View>
            <View style={styles.imgContainer}>
              <Text style={styles.textright}>0</Text>
              <Image
                source={require("../../assets/Body/honor.png")}
                // style={styles.imgIcon}
              />
            </View>
          </View>
          <View style={styles.imgmiddle}>
            <Text style={styles.began}>مبتدئ</Text>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require("../../assets/Body/eagle.jpeg")}
                style={styles.eagle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imgleft}>
            <View style={styles.imgContainer}>
              <Text style={styles.textright}>0</Text>
              <Image source={require("../../assets/Body/stars.png")} />
            </View>
            <View style={styles.imgContainer}>
              <Text style={styles.textright}>0</Text>
              <Image source={require("../../assets/Body/gold.png")} />
            </View>
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
    backgroundColor: "rgba(38, 43, 51, 1)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  gap: {
    height: 16,
  },
  textView2: {
    width: 343,
    height: 160,
    borderRadius: 16,
    backgroundColor: "rgba(38, 43, 51, 0.4)",
    alignItems: "center",
  },
  text1: {
    width: 75,
    height: 18,
    borderRadius: 8,
    backgroundColor: "rgba(38, 43, 51, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  imgright: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10, 
    width: 70, 
    height: 20, 
    borderRadius: 12,
    backgroundColor: "#4D5666",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.2,
    elevation: 2,
    marginBottom: 4,
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    marginVertical: 4, 
  },

  imgIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  imgmiddle: {
    flexDirection: "column", 
    flex: 1,
    justifyContent: "center",
    marginLeft: 25,
    position: "relative",
  },
  imgleft: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  textright: {
    // fontFamily: "Almarai",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 11,
    letterSpacing: 0.15,
    textAlign: "right",
    width: 10,
    height: 11,
    // gap: 0,
    // opacity: 0,
    // backgroundColor: "rgba(255, 255, 255, 1)",
  },
  eagle: {
    flexDirection: "column",
    alignItems: "center",
    width: 93,
    height: 93,
    borderRadius: 93 / 2, 
    overflow: "hidden",
  },
  began: {
    position: "absolute",
    bottom: 10, 
    alignSelf: "center", 
    width: 100.15,
    height: 21.46,
    borderRadius: 5.72,
    paddingHorizontal: 14.31,
    backgroundColor: "rgba(57, 64, 77, 1)",
    zIndex: 1,
    paddingRight: 35,
  },
  subb: {
    width: "auto", 
    height: "auto", 
    paddingVertical: 4, 
    paddingHorizontal: 10, 
    marginVertical: 4, 
    marginHorizontal: 10, 
    borderRadius: 8, 
    backgroundColor: "rgba(239, 176, 84, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  sub: {
    width: 59,
    height: 16,
    fontWeight: "700",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
    textAlign: "center",
    // backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

export default Top;
