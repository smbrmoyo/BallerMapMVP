import "react-native-gesture-handler";

import React from "react";
import EventScreen from "../../screens/EventScreen";

import { createStackNavigator } from "@react-navigation/stack";
import UserSearchScreen from "../../screens/UserSearchScreen";
import { ProfileProvider } from "./Providers/ProfileProvider";
import { hsize, wsize } from "../../utils/Dimensions";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  let routeName;

  return (
    <ProfileProvider>
      <Stack.Navigator initialRouteName={"Event"}>
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </ProfileProvider>
  );
};

export default ProfileStack;
