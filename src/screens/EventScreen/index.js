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
import styles from "./styles";
import CurrentContainer from "./CurrentContainer";
import UpcomingContainer from "./UpcomingContainer";
import Loading from "./Loading";
import { hsize, wsize } from "../../utils/Dimensions";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { API } from "aws-amplify";
import {
  onCreateUserEventConnection,
  onDeleteUserEventConnection,
} from "../../graphql/subscriptions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EventScreen = ({ data, size, navigation, route }) => {
  const { profileDoc, status } = useProfile();
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onPageRendered();
  }, [profileDoc]);

  const onPageRendered = async () => {
    const loggedUser = await AsyncStorage.getItem("currentUserCreds");
    (await profileDoc) != undefined ? setLoading(false) : null;
    setMyEvents(profileDoc?.eventsCreated.items);
    subscribeToCreateEvent(profileDoc, loggedUser);
    subscribeToDeleteEvent(profileDoc, loggedUser);
  };

  const subscribeToCreateEvent = async (profileDocument, loggedUser) => {
    console.log("subscription to create event here");
    // Subscribe to removal of userConnection
    await API.graphql({
      query: onCreateUserEventConnection,
    }).subscribe({
      next: (subOnDeleteConnection) => {
        console.log(
          subOnDeleteConnection.value.data.onCreateUserEventConnection
        );
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (
          subOnDeleteConnection.value.data.onCreateUserEventConnection
            .profileID == profileId
        ) {
          console.log("user related to this event");
          let newEvents = [];
          newEvents.push(myEvents);
          //Add this event
          newEvents.push(
            subOnDeleteConnection.value.data.onCreateUserEventConnection.Event
          );
          setMyEvents(newEvents);
        } else {
          console.log("event not related to this user");
        }
      },
      error: (error) => console.log(error, " here"),
    });
  };

  const subscribeToDeleteEvent = async (profileDocument, loggedUser) => {
    console.log("subscriptions to remove event here");
    // Subscribe to creation of userConnection
    await API.graphql({
      query: onDeleteUserEventConnection,
    }).subscribe({
      next: (subOnDeleteConnection) => {
        console.log(
          subOnDeleteConnection.value.data.onCreateUserEventConnection
        );
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (
          subOnDeleteConnection.value.data.onCreateUserEventConnection
            .profileID == profileId
        ) {
          console.log("user related to this event");
          let newEvents = [];
          newEvents.push(myEvents);
          //Remove this event
          newEvents.splice(
            myEvents.indexOf(
              subOnDeleteConnection.value.data.onCreateUserEventConnection
                .eventID,
              1
            )
          );
          setMyEvents(newEvents);
        } else {
          console.log("event not related to this user");
        }
      },
      error: (error) => console.log(error, " here"),
    });
  };

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
            <CurrentContainer navigation={navigation} myEvents={myEvents} />
            <UpcomingContainer navigation={navigation} myEvents={myEvents} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default EventScreen;
