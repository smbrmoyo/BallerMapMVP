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
import useCachedResources from "./src/Hooks/useCachedResources";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";

Amplify.configure({ ...config, Analytics: { disabled: true } });
LogBox.ignoreAllLogs();

const App = () => {
  const [themeColor, setThemeColor] = useState(Appearance.getColorScheme());
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppearanceProvider>
        <Providers themeColor={themeColor} />
      </AppearanceProvider>
    );
  }
};

export default App;
