import React from "react";
import AddChatScreen from "../screens/AddChatScreen";
import MessageStack from "./MessageStack";
import MessageSearchScreen from "../screens/MessageSearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ModalStack = ({ navigation }) => {
  let routeName;

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="MessageSearch"
        component={MessageSearchScreen}
        //options={{header: () => null}}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            //shadowColor: "black",
            //elevation: 5,
            height: hsize(80),
          },
        })}
      />
      <Stack.Screen
        name="AddChat"
        component={AddChatScreen}
        //options={{header: () => null}}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            //shadowColor: "black",
            //elevation: 5,
            height: hsize(80),
          },
        })}
      />
      <Stack.Screen
        name="MessageStack"
        component={MessageStack}
        options={{ headerShown: false }}
        mode="modal"
      />
    </Stack.Navigator>
  );
};
export default ModalStack;
