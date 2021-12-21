import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { getEvent } from "../../aws-functions/eventFunctions";
import ButtonContainer from "./ButtonContainer";
import ParticipantsContainer from "./ParticipatnsContainer";
import DescriptionContainer from "./DescriptionContainer";
import ProfileTopContainer from "./ProfileTopContainer";
import ProfileBottomContainer from "./ProfileBottomContainer";
import DeleteAlert from "./DeleteAlert";
import Loading from "./Loading";

const DescriptionScreen = ({ props, navigation, route }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);
  let id = route.params?.id;
  let beginningTime = new Date(event?.beginningTime);
  let endingTime = new Date(event?.endingTime);

  function pad2(string) {
    return `0${string}`.slice(-2);
  }

  const readableDate = (d) => {
    if (!d) return undefined;
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  };

  const readableTime = (d) => {
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
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
      headerLeft: () => (
        <View style={{ flexDirection: "row", margin: hsize(5) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{ justifyContent: "center" }}
          >
            <Entypo name="chevron-thin-left" size={23} color="#743cff" />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Infos</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () =>
        event?.creatorID == user ? (
          <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("UpdateEvent", { event: event })
              }
            >
              <View style={styles.iconContainer}>
                <Ionicons name="pencil-outline" size={23} color="#743cff" />
              </View>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  DeleteAlert(event, navigation);
                }}
              >
                <MaterialIcons
                  name="delete-outline"
                  size={23}
                  color="#743cff"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null,
    });
  }, [event]);

  useEffect(() => {
    getEvent(id).then((res) => {
      if (event == null || event == undefined) {
        setEvent(res);
      } else if (event != null || event != undefined) {
        setLoading(false);
      }
    });

    return () => {
      setLoading(true);
    };
  }, [event]);

  if (loading) return <Loading />;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <SafeAreaView
        style={{ flex: 1, padding: hsize(10), backgroundColor: "white" }}
      >
        <ProfileTopContainer event={event} navigate={navigation.navigate} />
        <ProfileBottomContainer
          readableDate={readableDate}
          readableTime={readableTime}
          beginningTime={beginningTime}
          event={event}
        />
        <ButtonContainer />
        <ParticipantsContainer event={event} />
        <DescriptionContainer description={event?.description} />
      </SafeAreaView>
    </>
  );
};

export default DescriptionScreen;
