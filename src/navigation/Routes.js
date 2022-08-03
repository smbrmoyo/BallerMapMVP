import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";
import LoadingScreen from "../screens/LoadingScreen";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AppProvider from "./Providers/AppProvider";

const Routes = (props) => {
  const { user, loadingUser } = useAuth();

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
