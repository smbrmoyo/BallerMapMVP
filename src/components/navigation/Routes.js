import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = (props) => {
  const { user } = useAuth();

  return (
    <NavigationContainer
      theme={props.themeColor == "dark" ? DarkTheme : DefaultTheme}
    >
      {user ? <AppStack themeColor={props.themeColor} /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

/*{user ? <AppStack /> : <AuthStack />} */
