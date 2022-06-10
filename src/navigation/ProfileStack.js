import "react-native-gesture-handler";

import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import AllUsersScreen from "../screens/AllUsersScreen";
import UpdateEventScreen from "../screens/UpdateEventScreen";
import FollowingScreen from "../screens/FollowingScreen";
import FollowersScreen from "../screens/FollowersScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import UserSearchUpdateScreen from "../screens/UserSearchUpdateScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import PlaceSearchUpdate from "../screens/PlaceSearchUpdate";
import DescriptionScreen from "../screens/DescriptionScreen";
import TryStory from "../screens/TryStory";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import StoryScreen4 from "../screens/StoryScreen4/App";

import { createStackNavigator } from "@react-navigation/stack";
import UserSearchScreen from "../screens/UserSearchScreen";
import { ProfileProvider } from "./Providers/ProfileProvider";
import { MapProvider } from "./Providers/MapProvider";
import { useAuth } from "./Providers/AuthProvider";
import { hsize, wsize } from "../utils/Dimensions";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  let routeName;

  /*if (createdDocs == null) {
    return null;
  } else if (createdDocs == false) {
    routeName = "SetProfile";
  } else {
    routeName = "Profile";
  }*/

  return (
    <MapProvider>
      <ProfileProvider>
        <Stack.Navigator initialRouteName={"Profile"}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Following" component={FollowingScreen} />
          <Stack.Screen name="Description" component={DescriptionScreen} />
          <Stack.Screen name="UpdateEvent" component={UpdateEventScreen} />
          <Stack.Screen name="Followers" component={FollowersScreen} />
          <Stack.Screen name="AllUsers" component={AllUsersScreen} />
          <Stack.Screen name="Attendance" component={AttendanceScreen} />
          <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
          <Stack.Screen name="UserUpdate" component={UserSearchUpdateScreen} />
          <Stack.Screen
            name="PlaceSearchUpdate"
            component={PlaceSearchUpdate}
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
    </MapProvider>
  );
};

export default ProfileStack;
