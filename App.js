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
import Amplify, { Storage } from "aws-amplify";
import config from "./src/aws-exports";
import useCachedResources from "./src/Hooks/useCachedResources";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";

Amplify.configure({
  ...config,
  identityPoolId: "eu-central-1:9de1ac11-b25f-4357-9ec2-f57e48b115a7",
  Analytics: { disabled: true },
  Storage: {
    AWSS3: {
      bucket: "ballermapmvp2e5fda8e36694dd8807e03dd4ddf2820", //REQUIRED -  Amazon S3 bucket name
      region: "eu-central-1", //OPTIONAL -  Amazon service region
    },
  },
});
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
