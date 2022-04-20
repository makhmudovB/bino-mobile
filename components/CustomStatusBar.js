import React from "react";
import { View, StatusBar, Text } from "react-native";
import Constants from "expo-constants";

export default function CustomStatusBar({barStyle, bgColor}) {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <View
        style={{
          height: Constants.statusBarHeight,
          backgroundColor: bgColor,
        }}
      />
    </>
  );
}
