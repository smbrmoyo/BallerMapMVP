/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";

import React from "react";

import Providers from "./src/components/navigation/index";
import { AuthProvider } from "./src/components/navigation/Providers/AuthProvider";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import * as Font from "expo-font";

Amplify.configure({ ...config, Analytics: { disabled: true } });

const App = () => {
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

  return <Providers />;
};

export default App;
