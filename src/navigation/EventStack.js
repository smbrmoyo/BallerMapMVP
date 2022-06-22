import React from "react";
import EventScreen from "../screens/EventScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventsProvider } from "./Providers/EventsProvider";

const Stack = createNativeStackNavigator();

const EventStack = ({ navigation }) => {
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

export default EventStack;
