import React, { useState, useEffect } from "react";
import { PermissionsAndroid, StatusBar, View } from "react-native";
import HomeScreen from "../../screens/HomeScreen";
import SignInScreenEmail from "../../screens/SignInScreenEmail";
import SignInScreenSocial from "../../screens/SignInScreenSocial";
import SignUpScreenEmail from "../../screens/SignUpScreenEmail";
import SignUpScreenSocial from "../../screens/SignUpScreenSocial";
import OnboardingScreen from "../../screens/OnboardingScreen";
import SetProfileScreen from "../../screens/SetProfileScreen";

import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("firstLaunch").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("firstLaunch", "true"); // Add  error handling
        setIsFirstLaunch(true);
      } else {
        AsyncStorage.setItem("firstLaunch", "false");
        setIsFirstLaunch(false);
      }
    }); // Add  error handling
  }, []);

  if (isFirstLaunch === null) {
    return null; // Use loader
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routeName = "SignInSocial";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SetProfile"
        component={SetProfileScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "white",
            shadowColor: "#f9fafd",
            elevation: 0,
            height: 80,
          },
        })}
      />
      <Stack.Screen
        name="SignInSocial"
        component={SignInScreenSocial}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignInEmail"
        //component={NewSignInScreen}
        component={SignInScreenEmail}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUpSocial"
        component={SignUpScreenSocial}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUpEmail"
        component={SignUpScreenEmail}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
