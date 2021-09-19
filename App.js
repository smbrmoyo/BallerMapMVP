/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import Providers from "./src/components/navigation";
import AddScreen from "./src/screens/AddScreen";
import { useAuth } from "./src/components/navigation/Providers/AuthProvider";
import * as Font from "expo-font";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [loaded] = Font.useFonts({
    Comfortaa: require("./src/assets/fonts/Comfortaa-VariableFont_wght.ttf"),
    ComfortaaBold: require("./src/assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf"),
    TimeBurner: require("./src/assets/fonts/timeburner.regular.ttf"),
    TimeBurnerBold: require("./src/assets/fonts/timeburner.bold.ttf"),
    VaguelyFatal: require("./src/assets/fonts/Vaguely_Fatal.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Providers />
    </>
  );
}
