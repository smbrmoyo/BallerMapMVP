import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import debounce from "lodash/debounce";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import Loading from "./Loading";
import ListContainer from "./ListContainer";
import NewDataContainer from "./NewDataContainer";
import ProfilePicture from "../../components/ProfilePictureUser";
import { wsize, hsize } from "../../utils/Dimensions";
import { useActivity } from "../../components/navigation/Providers/ActivityProvider";
import LoadingScreen from "../../screens/LoadingScreen";

const ActivityScreen = ({ navigation }) => {
  const { loadingNotif, activity } = useActivity();
  const [newData, setNewData] = useState(false);

  useEffect(() => {
    console.log("<------------- ACTIVITYSCREEN ---------------->");
    // Will check if notifs are loaded and set loading to false
    // Will compare updated data with old data and set newData to true
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Activity</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        //translucent
        backgroundColor="white" /*transparent*/
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        {loadingNotif ? (
          <Loading />
        ) : (
          <>
            <NewDataContainer newData={newData} setNewData={setNewData} />

            <ListContainer myNotifs={activity} setNewData={setNewData} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default ActivityScreen;
