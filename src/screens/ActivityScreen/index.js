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
import PopularTags from "../../assets/data/PopularTags";
import people from "../../assets/data/people";
import ProfilePicture from "../../components/ProfilePictureUser";
import { wsize, hsize } from "../../utils/Dimensions";

const ActivityScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Will check if notifs are loaded and set loading to false
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Notifications</Text>
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
        {loading ? (
          <Loading />
        ) : (
          <>
            <ListContainer myNotifs={people} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default ActivityScreen;
