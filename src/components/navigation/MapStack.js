import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { PermissionsAndroid, StatusBar, View } from "react-native";
import MapScreen from "../../screens/MapScreen";
import FindScreen from "../../screens/FindScreen";
import StoryScreen from "../../screens/StoryScreen";
import SetProfileScreen from "../../screens/SetProfileScreen";
import PlaceSearchScreen from "../../screens/PlaceSearchScreen";
import StoryScreen4 from "../../screens/StoryScreen4/App";
import AddScreen from "../../screens/AddScreen";
import AttendanceScreen from "../../screens/AttendanceScreen";
import UserSearchScreen from "../../screens/UserSearchScreen";
import DescriptionScreen from "../../screens/DescriptionScreen";
import OtherProfileScreen from "../../screens/OtherProfileScreen";
import Probe from "../../screens/Probe";
import { MapProvider } from "./Providers/MapProvider";
import {useAuth} from "./Providers/AuthProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { hsize, wsize } from "../../utils/Dimensions";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from '@react-native-community/geolocation';
//navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();

const MapStack = ({ navigation }) => {
  const {createdDocs, setCreatedDocs, IsProfileDoc} = useAuth();

  let routeName = "Map";

  useEffect(() => {
      return () => {
      }
  }, [createdDocs])

  if(!createdDocs){
      routeName = "SetProfile"
  }

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
            headerStyle: {
              backgroundColor: "white",
              shadowColor: "#f9fafd",
              elevation: 0,
              height: hsize(80),
            },
            /*headerRight: () => (
            <View style={{ marginLeft: 10 }}>
              <Entypo name="cross" size={23} color="black" />
              <Ionicons.Button
                name="chevron-back"
                size={25}
                backgroundColor="white"
                color="#333"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),*/
          })}
        />

        <Stack.Screen
          name="Find"
          component={FindScreen}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              shadowColor: "#f9fafd",
              elevation: 0,
              height: hsize(80),
            },
            /*headerRight: () => (
            <View style={{ marginLeft: 10 }}>
              <Entypo name="cross" size={23} color="black" />
              <Ionicons.Button
                name="chevron-back"
                size={25}
                backgroundColor="white"
                color="#333"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),*/
          })}
        />
        <Stack.Screen
          name="UserSearch"
          component={UserSearchScreen}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              //shadowColor: "black",
              //elevation: 5,
              height: hsize(80),
            },
          })}
        />
        <Stack.Screen
          name="PlaceSearch"
          component={PlaceSearchScreen}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              //shadowColor: "black",
              //elevation: 5,
              height: hsize(80),
            },
          })}
        />
        <Stack.Screen
          name="Attendance"
          component={AttendanceScreen}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              //shadowColor: "black",
              //elevation: 5,
              height: hsize(80),
            },
          })}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              shadowColor: "#f9fafd",
              elevation: 0,
            },
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
        <Stack.Screen
          name="SetProfile"
          component={SetProfileScreen}
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
    </MapProvider>
  );
};

export default MapStack;
