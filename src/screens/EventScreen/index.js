import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import styles from "./styles";
import CurrentContainer from "./CurrentContainer";
import UpcomingContainer from "./UpcomingContainer";
import Loading from "./Loading";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

const EventScreen = ({ data, size, navigation, route }) => {
  const { profileDoc, status } = useProfile();
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    profileDoc != undefined ? setLoading(false) : null;
    setMyEvents(profileDoc?.eventsCreated.items);
  }, [profileDoc]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Events</Text>
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
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <CurrentContainer myEvents={myEvents} />
            <UpcomingContainer myEvents={myEvents} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default EventScreen;
