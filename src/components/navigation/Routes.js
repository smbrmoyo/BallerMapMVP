import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";
import LoadingScreen from "../../screens/LoadingScreen/index.js";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AppProvider from "./Providers/AppProvider";

const Routes = (props) => {
  const { user, loadingUser } = useAuth();

  useEffect(() => {
    console.log("<------------- Routes ---------------->");
  });

  return (
    <NavigationContainer
      theme={props.themeColor == "dark" ? DarkTheme : DefaultTheme}
    >
      {loadingUser ? (
        <LoadingScreen />
      ) : user ? (
        <AppProvider>
          <AppStack themeColor={props.themeColor} />
        </AppProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;

/*{user ? <AppStack /> : <AuthStack />} */
