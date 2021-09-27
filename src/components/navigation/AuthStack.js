import React, { useState, useEffect } from "react";
import ConfirmSignUpScreen from "../../screens/ConfirmSignUpScreen";
import SignInScreenEmail from "../../screens/SignInScreenEmail";
import SignInScreenSocial from "../../screens/SignInScreenSocial";
import SignUpScreenEmail from "../../screens/SignUpScreenEmail";
import SignUpScreenSocial from "../../screens/SignUpScreenSocial";
import OnboardingScreen from "../../screens/OnboardingScreen";
import SetProfileScreen from "../../screens/SetProfileScreen";
import { hsize, wsize } from "../../utils/Dimensions";

import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
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
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="SignInSocial"
        component={SignInScreenSocial}
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="SignInEmail"
        component={SignInScreenEmail}
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="SignUpSocial"
        component={SignUpScreenSocial}
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="SignUpEmail"
        component={SignUpScreenEmail}
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUpScreen}
        options={({ navigation, route }) => ({ header: () => null })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
