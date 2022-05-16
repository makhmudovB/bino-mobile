import React from "react";
import { View, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";

export default function CustomStatusBar({ barStyle, bgColor }) {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? barStyle : "light-content"}
      />
      <View
        style={{
          height: Constants.statusBarHeight,
          backgroundColor: bgColor,
        }}
      />
    </>
  );
}
