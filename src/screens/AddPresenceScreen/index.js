import React, {useEffect, useLayoutEffect, useState,} from "react";
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

import ButtonContainer from "./ButtonContainer";
import EndDateContainer from "./EndDateContainer";
import StartDateContainer from "./StartDateContainer";
import TextInputContainer from "./TextInputContainer";
import {useAuth} from "../../navigation/Providers/AuthProvider";
import {hsize, wsize} from "../../utils/Dimensions";
import styles from "./styles";

//navigator.geolocation = require("@react-native-community/geolocation");

const AddScreen = ({ navigation, route }) => {
  const { user } = useAuth();
  const headerHeight = useHeaderHeight();

  const [visibleStart, setVisibleStart] = useState(false); // Put visible and color in one state object
  const [visibleEnd, setVisibleEnd] = useState(false);
  const [colorBegin, setColorBegin] = useState("#CDCDCD");
  const [colorEnd, setColorEnd] = useState("#CDCDCD");

  const [eventData, setEventData] = useState({
    name: "",
    placeID: route.params?.searchedPlace.id,
    placeName: route.params?.searchedPlace.name,
    creatorID: user,
    creator: user,
    tags: [],
    description: "",
    profileId: "", //should be current authenticated user profile Id
    beginningTime: new Date(),
    endingTime: new Date(),
    privacy: "private",
    _version: 0,
    _deleted: false,
    _lastChangedAt: new Date(),
  });

  useEffect(() => {
    if (route.params !== undefined) {
      setEventData({
        ...eventData,
        placeID: route.params?.searchedPlace.id,
        placeName: route.params?.searchedPlace.name,
      });
    }
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        height: hsize(80),
        //shadowColor: "black",
        //elevation: 5,
      },
      //headerTitleAlign: 'left',
      headerBackTitleVisible: true,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Create A Run</Text>
          </TouchableOpacity>
        </View>
      ),
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
      headerRight: () => (
        <View style={{ flexDirection: "row", marginHorizontal: wsize(10) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("UserSearch")} // Should have a userSearchAddScreen
            style={{ justifyContent: "center" }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="people-outline" size={23} color="#743cff" />
            </View>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  function pad2(string) {
    return `0${string}`.slice(-2);
  }

  const readableDate = (d) => {
    if (!d) return undefined;
    return `${pad2(d.getDate())}/${pad2(
      d.getMonth() + 1
    )}/${d.getFullYear()}  at  ${pad2(d.getHours())}:${pad2(
      d.getMinutes()
    )}:${pad2(d.getSeconds())}`;
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <DateTimePickerModal
        isVisible={visibleStart} /*Should have second component for end date */
        mode="datetime"
        display="spinner"
        isDarkModeEnabled={false}
        onConfirm={(datum) => (
          setEventData({
            ...eventData,
            beginningTime: datum,
          }),
          setVisibleStart(false),
          setColorBegin("#743cff")
        )}
        onCancel={() => setVisibleStart(false)}
      />

      <DateTimePickerModal
        isVisible={visibleEnd} /*Should have second component for end date */
        mode="datetime"
        display="spinner"
        isDarkModeEnabled={false}
        onConfirm={(datum) => (
          setEventData({
            ...eventData,
            endingTime: datum,
          }),
          setVisibleEnd(false),
          setColorEnd("#743cff")
        )}
        onCancel={() => setVisibleEnd(false)}
      />

      <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <ScrollView style={{ flex: 1, padding: 10 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <TextInputContainer
                  eventData={eventData}
                  setEventData={setEventData}
                />

                <StartDateContainer
                  setVisibleStart={setVisibleStart}
                  colorBegin={colorBegin}
                  beginningTime={eventData.beginningTime}
                  readableDate={readableDate}
                />

                <EndDateContainer
                  setVisibleEnd={setVisibleEnd}
                  colorEnd={colorEnd}
                  endingTime={eventData.endingTime}
                  readableDate={readableDate}
                />

                <ButtonContainer
                  eventData={eventData}
                  navigation={navigation}
                  params={route.params}
                />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default AddScreen;
