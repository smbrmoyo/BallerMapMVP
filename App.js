/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";

import React, { useState } from "react";
import { LogBox, Appearance } from "react-native";
import Providers from "./src/navigation/index";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import useCachedResources from "./src/Hooks/useCachedResources";

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
    return <Providers themeColor={themeColor} />;
  }
};

export default App;
