import React, { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import ActivityStack from "./ActivityStack";
import MapStack from "./MapStack";
import ProfileStack from "./ProfileStack";
import EventStack from "./EventStack";

import SetProfileScreen from "../screens/SetProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppContext } from "./Providers/AppProvider";
import LoadingScreen from "../screens/LoadingScreen";
import { useAuth } from "./Providers/AuthProvider";
import { registerForPushNotificationsAsync } from "../utils/Notifications/registerForNotifications";
import * as TaskManager from "expo-task-manager";

const Tab = createBottomTabNavigator();
const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

TaskManager.defineTask(
  BACKGROUND_NOTIFICATION_TASK,
  ({ data, error, executionInfo }) => {
    console.log("Received a notification in the background!");
    // Do something with the notification data
    console.log(data);
  }
);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const AppStack = (route, props) => {
  const { isPdoc, loadingProfileDoc } = useAppContext();
  const { user } = useAuth();
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  console.log("lastNotificationResponse: ", lastNotificationResponse);
  const [badgeCount, setBadgeCount] = useState(0);

  React.useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request &&
      lastNotificationResponse.actionIdentifier ===
        Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      setBadgeCount(1);
    }
  }, [lastNotificationResponse]);

  useEffect(() => {
    registerForPushNotificationsAsync(user);

    Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK).then(
      (r) => {}
    );

    const notificationReceivedListener =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Notification received: ", notification);
        Notifications.getBadgeCountAsync().then((response) => {
          badgeCount = response;
          console.log(response);
        });
      });

    return () => {
      notificationReceivedListener.remove();
    };
  }, []);

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === "Home") {
      return false;
    }
    if (routeName === "AddChat") {
      return false;
    }
    if (routeName === "MessageSearch") {
      return false;
    }
    if (routeName === "Add") {
      return false;
    }
    if (routeName === "Find") {
      return false;
    }
    if (routeName === "Story") {
      return false;
    }
    if (routeName === "Chat") {
      return false;
    }
    if (routeName === "Following") {
      return false;
    }
    if (routeName === "CreatePost") {
      return false;
    }
    if (routeName === "UserSearch") {
      return false;
    }
    if (routeName === "") return true;
  };

  if (loadingProfileDoc) return <LoadingScreen />;

  if (!isPdoc) return <SetProfileScreen />;

  return (
    <Tab.Navigator
      initialRouteName={"MapStack"}
      shifting={false}
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarinactiveTintColor: "#7B7B7B",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0.3,
          borderTopColor: "#C4C4C4",
          //height: 50,
        },
        header: () => null,
      }}
    >
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={({ route }) => ({
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={24} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="EventStack"
        component={EventStack}
        options={({ route }) => ({
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={26} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={({ route }) => ({
          tabBarLabel: "Activity",
          tabBarBadge: badgeCount == 0 ? null : badgeCount,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell-o" size={24} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={32} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

{
  /*
                                                                                                                                                                                                                                            <Tab.Screen
                                                                                                                                                                                                                                                  name="MessageStack"
                                                                                                                                                                                                                                                  component={MessageStack}
                                                                                                                                                                                                                                                  options={({ route }) => ({
                                                                                                                                                                                                                                                    tabBarLabel: "Message",
                                                                                                                                                                                                                                                    tabBarVisible: getTabBarVisibility(route),
                                                                                                                                                                                                                                                    tabBarIcon: ({ color, size }) => (
                                                                                                                                                                                                                                                      <Feather name="message-square" size={26} color={color} />
                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                    //tabBarBadge: 3,
                                                                                                                                                                                                                                                  })}
                                                                                                                                                                                                                                                />
                                                                                                  
                                                                                                                                                                                                                                            <Tab.Screen
                                                                                                                                                                                                                                                  name="Home"
                                                                                                                                                                                                                                                  component={HomeStack}
                                                                                                                                                                                                                                                  options={({ route }) => ({
                                                                                                                                                                                                                                                    tabBarLabel: "Feed",
                                                                                                                                                                                                                                                    tabBarVisible: getTabBarVisibility(route),
                                                                                                                                                                                                                                                    tabBarIcon: ({ color, size }) => (
                                                                                                                                                                                                                                                      <MaterialCommunityIcons
                                                                                                                                                                                                                                                        name="home-circle-outline"
                                                                                                                                                                                                                                                        size={30}
                                                                                                                                                                                                                                                        color={color}
                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                    //tabBarBadge: 5,
                                                                                                                                                                                                                                                  })}
                                                                                                                                                                                                                                                />
                                                                                                  
                                                                                                                                                                                                                                                <Tab.Screen
                                                                                                                                                                                                                                                  name="Category"
                                                                                                                                                                                                                                                  component={CategoryStack}
                                                                                                                                                                                                                                                  options={({ route }) => ({
                                                                                                                                                                                                                                                    tabBarLabel: "Places",
                                                                                                                                                                                                                                                    tabBarVisible: getTabBarVisibility(route),
                                                                                                                                                                                                                                                    tabBarIcon: ({ color, size }) => (
                                                                                                                                                                                                                                                      <AntDesign name="appstore-o" size={23} color={color} />
                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                  })}
                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                */
}
