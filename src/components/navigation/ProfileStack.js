import "react-native-gesture-handler";

import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";
import FollowingScreen from "../../screens/FollowingScreen";
import FollowersScreen from "../../screens/FollowersScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import DescriptionScreen from "../../screens/DescriptionScreen";
import TryStory from "../../screens/TryStory";
import OtherProfileScreen from "../../screens/OtherProfileScreen";
import StoryScreen4 from "../../screens/StoryScreen4/App";

import { createStackNavigator } from "@react-navigation/stack";
import UserSearchScreen from "../../screens/UserSearchScreen";
import { ProfileProvider } from "./Providers/ProfileProvider";
import { hsize, wsize } from "../../utils/Dimensions";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  let routeName;

  return (
    <ProfileProvider>
      <Stack.Navigator initialRouteName={"Profile"}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              //shadowColor: 'black',
              //elevation: 5,
              height: hsize(80),
            },
          })}
          //options={{ header: () => null }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
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
          name="Following"
          component={FollowingScreen}
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
              height: hsize(80),
              //shadowColor: "#f9fafd",
              //elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="Followers"
          component={FollowersScreen}
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
          name="OtherProfile"
          component={OtherProfileScreen}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              //shadowColor: "black",
              //elevation: 5,
              //height: hsize(80)
            },
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
          name="TryStory"
          component={TryStory}
          options={({ navigation }) => ({
            title: "",

            header: () => null,
          })}
        />
      </Stack.Navigator>
    </ProfileProvider>
  );
};

export default ProfileStack;
