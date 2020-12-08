import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  var userName = "admin";
  return (
    <View style={{ backgroundColor: "#ffff", flex: 1 }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "red", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}
