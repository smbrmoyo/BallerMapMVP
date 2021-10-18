import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import ActivityScreen from "../../screens/ActivityScreen";
import Pressable from "../../screens/Pressable";
import OtherProfileScreen from "../../screens/OtherProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { hsize, wsize } from "../../utils/Dimensions";

const Stack = createStackNavigator();

const ActivityStack = ({ navigation }) => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName={"Category"}>
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
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

export default ActivityStack;

/*headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Ionicons.Button
                name="chevron-back"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Message')}
              />
            </View>
          ),*/
