/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";

import React, { useState } from "react";
import { LogBox } from "react-native";
import Providers from "./src/components/navigation/index";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import LoadingScreen from "./src/screens/LoadingScreen";
import * as Font from "expo-font";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";

Amplify.configure({ ...config, Analytics: { disabled: true } });
LogBox.ignoreAllLogs();

const App = () => {
  const [themeColor, setThemeColor] = useState(Appearance.getColorScheme());
  const [loaded] = Font.useFonts({
    Comfortaa: require("./src/assets/fonts/Comfortaa-VariableFont_wght.ttf"),
    ComfortaaBold: require("./src/assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AppearanceProvider>
      <Providers themeColor={themeColor} />
    </AppearanceProvider>
  );
};

export default App;
