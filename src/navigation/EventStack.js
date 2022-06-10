import "react-native-gesture-handler";

import React from "react";
import EventScreen from "../screens/EventScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

import { createStackNavigator } from "@react-navigation/stack";
import UserSearchScreen from "../screens/UserSearchScreen";
import { EventsProvider } from "./Providers/EventsProvider";
import { hsize, wsize } from "../utils/Dimensions";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  let routeName;

  return (
    <EventsProvider>
      <Stack.Navigator initialRouteName={"Event"}>
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
      </Stack.Navigator>
    </EventsProvider>
  );
};

export default ProfileStack;
