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
import { useEvents } from "../../components/navigation/Providers/EventsProvider";
import { API } from "aws-amplify";
import {
  onCreateUserEventConnection,
  onDeleteUserEventConnection,
} from "../../graphql/subscriptions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EventScreen = ({ navigation, route }) => {
  const { events, loading } = useEvents();

  useEffect(() => {
    /*let subscribeToCreateEvent = API.graphql(
      graphqlOperation(onCreateNotification, {
        profileID: user,
      })
    ).subscribe({
      next: ({ value }) => {
        // setNotifExtraData(!notifExtraData);
        setData((old) => [value.data.onCreateNotification, ...old]);
      },
      error: (error) =>
        console.log(
          "   ERROR on onCreateNotification : " + JSON.stringify(error)
        ),
    });

    let subscribeToCreateNotification = API.graphql(
      graphqlOperation(onCreateNotification, {
        profileID: user,
      })
    ).subscribe({
      next: ({ value }) => {
        // setNotifExtraData(!notifExtraData);
        setData((old) => [value.data.onCreateNotification, ...old]);
      },
      error: (error) =>
        console.log(
          "   ERROR on onCreateNotification : " + JSON.stringify(error)
        ),
    });*/
  }, []);

  const onPageRendered = async () => {
    //subscribeToCreateEvent(profileDoc, loggedUser);
    //subscribeToDeleteEvent(profileDoc, loggedUser);
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
            <CurrentContainer navigation={navigation} myEvents={events} />
            <UpcomingContainer navigation={navigation} myEvents={events} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default EventScreen;
