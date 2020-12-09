import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const viewImageScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff ",
        flexDirection: "row",
        justifyContent: "space-between",
        top: 40,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 60,
          height: 60,
          marginLeft: 10,
        }}
      />

      <View
        style={{
          backgroundColor: "green",
          width: 60,
          height: 50,
          marginRight: 10,
        }}
      />
      <Image src={require("./App/assets/chair.jpg")} />
    </View>
  );
};

export default ViewImageScreen;
