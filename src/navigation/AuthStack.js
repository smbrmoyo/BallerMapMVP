import React, {useEffect, useState} from "react";
import ConfirmSignUpScreen from "../screens/ConfirmSignUpScreen";
import SignInScreenEmail from "../screens/SignInScreenEmail";
import SignInScreenSocial from "../screens/SignInScreenSocial";
import SignUpScreenEmail from "../screens/SignUpScreenEmail";
import SignUpScreenSocial from "../screens/SignUpScreenSocial";
import OnboardingScreen from "../screens/OnboardingScreen";
import SetNewPasswordScreen from "../screens/SetNewPasswordScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import {useAuth} from "./Providers/AuthProvider";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const { user } = useAuth();
  let routeName;

  useEffect(() => {
    console.log("\n", "\n", "<------------- AUTHSTACK ---------------->");
    console.log("user value in AuthStack :" + JSON.stringify(user));
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
  } else if (isFirstLaunch == false) {
    routeName = "Onboarding";
  } else {
    routeName = "SignInEmail";
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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={({ navigation, route }) => ({ header: () => null })}
      />
      <Stack.Screen
        name="SetNewPassword"
        component={SetNewPasswordScreen}
        options={({ navigation, route }) => ({ header: () => null })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
