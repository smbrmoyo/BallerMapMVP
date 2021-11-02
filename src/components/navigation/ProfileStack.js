import "react-native-gesture-handler";

import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";
import SetProfileScreen from "../../screens/SetProfileScreen";
import UpdateEventScreen from "../../screens/UpdateEventScreen";
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
import { useAuth } from "./Providers/AuthProvider";
import { hsize, wsize } from "../../utils/Dimensions";

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
    <ProfileProvider>
      <Stack.Navigator initialRouteName={"Profile"}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="UpdateEvent" component={UpdateEventScreen} />
        <Stack.Screen name="Followers" component={FollowersScreen} />
        <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
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
