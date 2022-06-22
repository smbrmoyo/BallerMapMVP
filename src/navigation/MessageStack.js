import React from "react";
import MessageScreen from "../screens/MessageScreen";
import ChatScreen from "../screens/ChatScreen";
import StoryScreen from "../screens/StoryScreen";
import AddChatScreen from "../screens/AddChatScreen";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import MessageSearchScreen from "../screens/MessageSearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { hsize } from "../utils/Dimensions";

const Stack = createNativeStackNavigator();

/*const MessageNonModal = ({ navigation, route }) => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName="MessageHome">
      <Stack.Screen
        name="MessageHome"
        component={MessageScreen}
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
      {<Stack.Screen
        name="MessageModal"
        component={MessageModal}
        options={{ headerShown: false }}
        mode="modal"
      />}
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation, route }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            //shadowColor: "black",
            elevation: 5,
            height: hsize(80),
          },
        })}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={({ navigation, route }) => ({
          title: "",
          /*headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "black",
            elevation: 5,
            height: 100,
          },
          header: () => null,
        })}
      />
    </Stack.Navigator>
  );
};*/

const MessageStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName="MessageHome">
      <Stack.Screen name="MessageHome" component={MessageScreen} />
      <Stack.Screen
        name="MessageSearch"
        component={MessageSearchScreen}
        //options={{header: () => null}}
        options={({ navigation, route }) => ({
          title: "",
          header: () => null,
          /*headerStyle: {
                      backgroundColor: "white",
                      //shadowColor: "black",
                      //elevation: 5,
                      height: hsize(80),
                    },*/
        })}
      />
      <Stack.Screen
        name="AddChat"
        component={AddChatScreen}
        //options={{header: () => null}}
        options={({ navigation, route }) => ({
          title: "",
          header: () => null,
          /*headerStyle: {
                      backgroundColor: "white",
                      //shadowColor: "black",
                      //elevation: 5,
                      height: hsize(80),
                    },*/
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation, route }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            //shadowColor: "black",
            elevation: 5,
            height: hsize(80),
          },
        })}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={({ navigation, route }) => ({
          title: "",
          /*headerStyle: {
                      backgroundColor: "#f9fafd",
                      shadowColor: "black",
                      elevation: 5,
                      height: 100,
                    },*/
          header: () => null,
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
    </Stack.Navigator>
  );
};

export default MessageStack;
