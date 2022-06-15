import React, {useState} from "react";
import MapScreen from "../screens/MapScreen";
import SetProfileScreen from "../screens/SetProfileScreen";
import PlaceSearchScreen from "../screens/PlaceSearchScreen";
import MapSearchScreen from "../screens/MapSearchScreen";
import StoryScreen4 from "../screens/StoryScreen4/App";
import UpdateEventScreen from "../screens/UpdateEventScreen";
import AddScreen from "../screens/AddScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import UserSearchScreen from "../screens/UserSearchScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import AddPresenceScreen from "../screens/AddPresenceScreen";
import {MapProvider} from "./Providers/MapProvider";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createNativeStackNavigator();

const MapStack = (props) => {
  const [profileCreated, setProfileCreated] = useState(null);
  let routeName = "Map";
  console.log("In the MapStack");

  return (
    <MapProvider>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={({ navigation }) => ({
            title: "",
            header: () => null,
          })}
        />

        <Stack.Screen
          name="Story"
          component={StoryScreen4}
          options={({ navigation }) => ({
            title: "",
            header: () => null,
          })}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={({ navigation }) => ({
            title: "",
            tabBarStyle: { display: "none" },
          })}
        />
        <Stack.Screen name="UpdateEvent" component={UpdateEventScreen} />
        <Stack.Screen name="AddPresence" component={AddPresenceScreen} />
        <Stack.Screen name="UserSearch" component={UserSearchScreen} />
        <Stack.Screen name="PlaceSearch" component={PlaceSearchScreen} />
        <Stack.Screen name="MapSearch" component={MapSearchScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="SetProfile" component={SetProfileScreen} />
        <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
      </Stack.Navigator>
    </MapProvider>
  );
};

export default MapStack;
