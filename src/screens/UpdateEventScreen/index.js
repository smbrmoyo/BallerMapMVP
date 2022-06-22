import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

import ButtonContainer from "./ButtonContainer";
import DescriptionContainer from "./DescriptionContainer";
import EndDateContainer from "./EndDateContainer";
import LocationContainer from "./LocationContainer";
import NameContainer from "./NameContainer";
import StartDateContainer from "./StartDateContainer";
import TagsContainer from "./TagsContainer";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { hsize } from "../../utils/Dimensions";
import styles from "./styles";

const AddScreen = ({ navigation, route }) => {
  const { user } = useAuth();
  const headerHeight = useHeaderHeight();
  const [event, setEvent] = useState(route.params?.event);
  const [visibleStart, setVisibleStart] = useState(false); // Put visible and color in one state object
  const [visibleEnd, setVisibleEnd] = useState(false);
  const [check, setCheck] = useState(false);
  const _scrollView = useRef(null);
  const [validate, setValidate] = useState(true);
  const [colorBegin, setColorBegin] = useState("#743cff");
  const [colorEnd, setColorEnd] = useState("#743cff");
  const { colors } = useTheme();
  const [eventData, setEventData] = useState(event);

  useEffect(() => {
    if (route.params?.searchedPlace !== undefined) {
      setEventData({
        ...eventData,
        placeID: route.params?.searchedPlace?.id,
        place: {
          name: route.params?.searchedPlace?.name,
        },
      });
    }
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      //headerTitleAlign: 'left',
      headerBackTitleVisible: true,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Modify Your Run</Text>
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
        <View style={{ flexDirection: "row", margin: hsize(5) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("UserUpdate", {
                participants: event.participants,
                participantsIDs: event.participantsIDs,
              })
            } // Should have a userSearchAddScreen
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
        testID="startUpdate"
        date={new Date(eventData.beginningTime)}
        isDarkModeEnabled={colors.background == "rgb(1, 1, 1)" ? true : false}
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
        testID="endUpdate"
        date={new Date(eventData.endingTime)}
        isDarkModeEnabled={colors.background == "rgb(1, 1, 1)" ? true : false}
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
                <NameContainer
                  eventData={eventData}
                  setEventData={setEventData}
                  check={check}
                  setValidate={setValidate}
                  validate={validate}
                />

                <LocationContainer
                  eventData={eventData}
                  navigate={navigation.navigate}
                  event={event}
                  check={check}
                  setValidate={setValidate}
                  validate={validate}
                />

                <DescriptionContainer
                  eventData={eventData}
                  setEventData={setEventData}
                />

                <TagsContainer
                  eventData={eventData}
                  setEventData={setEventData}
                />

                <StartDateContainer
                  setVisibleStart={setVisibleStart}
                  colorBegin={colorBegin}
                  beginningTime={new Date(eventData.beginningTime)}
                  readableDate={readableDate}
                  check={check}
                  setValidate={setValidate}
                  validate={validate}
                />

                <EndDateContainer
                  setVisibleEnd={setVisibleEnd}
                  colorEnd={colorEnd}
                  endingTime={new Date(eventData.endingTime)}
                  readableDate={readableDate}
                  check={check}
                  setValidate={setValidate}
                  validate={validate}
                />

                <ButtonContainer
                  eventData={eventData}
                  setCheck={setCheck}
                  navigation={navigation}
                  params={route.params}
                  validate={validate}
                  setValidate={setValidate}
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
