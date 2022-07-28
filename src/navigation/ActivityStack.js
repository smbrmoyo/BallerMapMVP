import React from "react";
import ActivityScreen from "../screens/ActivityScreen";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityProvider } from "./Providers/ActivityProvider";
import DescriptionScreen from "../screens/DescriptionScreen";
import { ProfileProvider } from "./Providers/ProfileProvider";

const Stack = createStackNavigator();

const ActivityStack = ({ navigation }) => {
  return (
    <ActivityProvider>
      <ProfileProvider>
        <Stack.Navigator initialRouteName={"Activity"}>
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
          <Stack.Screen name="Description" component={DescriptionScreen} />
        </Stack.Navigator>
      </ProfileProvider>
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
