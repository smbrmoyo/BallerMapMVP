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
import { ActivityProvider } from "../navigation/Providers/ActivityProvider";

const Stack = createStackNavigator();

const ActivityStack = ({ navigation }) => {
  return (
    <ActivityProvider>
      <Stack.Navigator initialRouteName={"Activity"}>
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
      </Stack.Navigator>
    </ActivityProvider>
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
