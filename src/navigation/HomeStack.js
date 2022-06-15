import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Push from "../../Notifications";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => null,
        })}
      />
      <Stack.Screen
        name="Push"
        component={Push}
        options={({ navigation }) => ({
          header: () => null,
        })}
      />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "white",
            //shadowColor: "black",
            //elevation: 5,
            height: hsize(80),
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
