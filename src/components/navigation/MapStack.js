import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { PermissionsAndroid, StatusBar, View } from "react-native";
import MapScreen from "../../screens/MapScreen";
import FindScreen from "../../screens/FindScreen";
import StoryScreen from "../../screens/StoryScreen";
import SetProfileScreen from "../../screens/SetProfileScreen";
import PlaceSearchScreen from "../../screens/PlaceSearchScreen";
import MapSearchScreen from "../../screens/MapSearchScreen";
import StoryScreen4 from "../../screens/StoryScreen4/App";
import AddScreen from "../../screens/AddScreen";
import AttendanceScreen from "../../screens/AttendanceScreen";
import UserSearchScreen from "../../screens/UserSearchScreen";
import DescriptionScreen from "../../screens/DescriptionScreen";
import OtherProfileScreen from "../../screens/OtherProfileScreen";
import AddPresenceScreen from "../../screens/AddPresenceScreen";
import Probe from "../../screens/Probe";
import { MapProvider } from "./Providers/MapProvider";
import { useAuth } from "./Providers/AuthProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { hsize, wsize } from "../../utils/Dimensions";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();


const MapStack = (props) => {
  const [profileCreated, setProfileCreated] = useState(null);
  let routeName = "Map";
  useEffect(() => {
    console.log("<------------- MAPSTACK ---------------->")
  }, []);


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
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="AddPresence" component={AddPresenceScreen} />
        <Stack.Screen name="UserSearch" component={UserSearchScreen} />
        <Stack.Screen name="PlaceSearch" component={PlaceSearchScreen} />
        <Stack.Screen name="MapSearch" component={MapSearchScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="SetProfile" component={SetProfileScreen} />
      </Stack.Navigator>
    </MapProvider>
  );
};

export default MapStack;
