import React from "react";
import ActivityStack from "./ActivityStack";
import MessageStack from "./MessageStack";
import MapStack from "./MapStack";
import ProfileStack from "./ProfileStack";
import EventStack from "./EventStack";
import ModalStack from "./ModalStack";
import { useAuth } from "./Providers/AuthProvider";
//import SnapchatStack from "../../../Snapchat";
import { useState, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { AWSAppSyncClient } from "aws-appsync";
import awsconfig from "../../aws-exports";
import { Auth } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

/*useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const experienceId = "brianmoyou/BallerMapExpo";
    const token = (await Notifications.getExpoPushTokenAsync(experienceId=experienceId).data;
    console.log(token);
    this.setState({ expoPushToken: token });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: 'rgba(255,35,31,0.49)',
    });
  }
  };



}, [])*/
const AppStack = (route, props) => {
  const [notifPermission, setNotifPermission] = useState();
  const {
    auth,
    setAuth,
    client,
    setClient,
    createdDocs,
    setCreatedDocs,
    IsProfileDoc,
    user,
  } = useAuth();

  useEffect(() => {
    console.log("appStack");
    const get_client = async () => {
      const temp = await new AWSAppSyncClient({
        url: awsconfig.aws_appsync_graphqlEndpoint,
        region: awsconfig.aws_appsync_region,
        auth: {
          type: awsconfig.aws_appsync_authenticationType,
          jwtToken: async () => {
            return (await Auth.currentSession()).getIdToken().getJwtToken();
          },
        },
        disableOffline: true,
      });

      let bool = await IsProfileDoc(user);
      if (!bool) {
        console.log("Pas de ProfileDoc");
      } else {
        console.log("Profile doc trouvé");
        setCreatedDocs(true);
      }

      console.log("App");
      return true;
    };

    get_client().then((res) => {
      routename = "Map";
      console.log("Client Set");
      setClient(res);
    });

    let temp;
    return () => {
      if (client != undefined) {
        client.destroy();
      }
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
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName={"Map"}
      shifting={false}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "#7B7B7B",
        showLabel: false,
        style: {
          backgroundColor: "white",
          borderTopWidth: 0.3,
          borderTopColor: "#C4C4C4",
          //height: 50,
        },
      }}
    >
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
        name="Event"
        component={EventStack}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={26} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={({ route }) => ({
          tabBarLabel: "Map",
          // theme: props.themeColor,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityStack}
        options={({ route }) => ({
          tabBarLabel: "Places",
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell-o" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarVisible: getTabBarVisibility(route),
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
