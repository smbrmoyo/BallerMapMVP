import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Button, Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Haptics from "expo-haptics";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import PlaceRow from "./PlaceRow";
import ProfilePicture from "../../components/ProfilePicture";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import {
  useAuth,
  getUprofile,
} from "../../components/navigation/Providers/AuthProvider";
import { useMap } from "../../components/navigation/Providers/MapProvider";
import { wsize, hsize } from "../../utils/Dimensions";
import places from "../../assets/data/places";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import { createEvent } from "../../aws-functions/eventFunctions";

//navigator.geolocation = require("@react-native-community/geolocation");

const AddScreen = ({ props, navigation, route }) => {
  //const { username } = useMap();
  const username = "";
  // const { user, profilePartition } = useAuth();
  /*import username from useProfile() */
  let placeNameParams = "";
  placeNameParams = route.params?.item.name;
  const [eventData, setEventData] = useState({
    name: "", //name of the place
    placeName: "",
    tags: [],
    description: "",
    uProfileId: "", //should be current authenticated user profile Id
    beginningTime: new Date(),
    endingTime: new Date(),
    privacy: "private"
  });

  //console.log(event);

  useEffect(() => {
    if (route.params !== undefined) {
      setEventData({
        ...eventData,
        placeName: placeNameParams,
      });
    }
  }, [route]);

  let insertEvent = async () => {
    try {
      console.log(eventData);
      let eventDoc = await createEvent(eventData);
      console.log(eventDoc);
    } catch (error) {
      console.error(error);
    }
    /*const creation = user.functions
      .Create_Event(event)
      .then((result) => console.log("evénement bien créé"))
      .catch((err) => console.log(err));*/
  };

  const [visibleStart, setVisibleStart] = useState(false);
  const [visibleEnd, setVisibleEnd] = useState(false);
  const [color, setColor] = useState("#CDCDCD");

  const headerHeight = useHeaderHeight();

  const checkNavigation = () => {
    /*if (address && description && tags) {
      navigation.navigate("Map", {
        address,
        description,
        tags,
      });
    }*/
  };

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
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(
      d.getDate()
    )} ${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  };

  function impactAsync(style) {
    switch (style) {
      case "light":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case "medium":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      default:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
    }
  }

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
        onConfirm={(datum) => (
          setEventData({
            ...eventData,
            beginningTime: datum
          }),
          setVisibleStart(false),
          setColor("#743cff")
        )}
        onCancel={() => setVisibleStart(false)}
      />

      <DateTimePickerModal
        isVisible={visibleEnd} /*Should have second component for end date */
        mode="datetime"
        display="spinner"
        onConfirm={(datum) => (
          setEventData({
            ...eventData,
            endingDateTime: datum
          }),
          setVisibleEnd(false),
          setColor("#743cff")
        )}
        onCancel={() => setVisibleEnd(false)}
      />

      <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            //animation="fadeInUpBig"
            /*contentContainerStyle={{
              padding: 10,
              flex: 1,
              justifyContent: "center",
            }}*/
            style={{ flex: 1, padding: 10 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={{
                  //padding: 24,
                  flex: 1,
                  justifyContent: "flex-end",
                  //paddingBottom: 100,
                }}
              >
                <View style={styles.descriptionContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Name</Text>
                  </View>

                  <TextInput
                    style={{
                      padding: hsize(10),
                      backgroundColor: "#eee",
                      marginVertical: hsize(5),
                      borderRadius: hsize(5),
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      elevation: 2,
                    }}
                    placeholder="Give your run a name"
                    placeholderTextColor="#CDCDCD"
                    onEndEditing={(event) =>
                      setEventData({
                        ...eventData,
                        name: event.nativeEvent.text,
                      })
                    }
                  />
                </View>

                <View style={styles.locationContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Address</Text>
                  </View>
                  <View style={styles.adressContainer}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("PlaceSearch")}
                      /*if (route.params) {
    setEvent({
      ...event,
      placeName: route.params.placeName,
    })
  }*/
                    >
                      <View
                        style={{
                          padding: hsize(10),
                          backgroundColor: "#eee",
                          marginVertical: hsize(5),
                          borderRadius: hsize(5),
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 1,
                          },
                          shadowOpacity: 0.2,
                          shadowRadius: 1.41,
                          elevation: 2,
                        }}
                      >
                        {eventData.placeName === "" ? (
                          <Text style={{ color: "#CDCDCD" }}>
                            Find an Address
                          </Text>
                        ) : (
                          <Text style={{ color: "black" }}>
                            {eventData.placeName}
                          </Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.descriptionContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Description</Text>
                  </View>

                  <TextInput
                    style={{
                      padding: hsize(10),
                      backgroundColor: "#eee",
                      marginVertical: hsize(5),
                      borderRadius: hsize(5),
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      elevation: 2,
                    }}
                    placeholder="In a few words"
                    multiline
                    placeholderTextColor="#CDCDCD"
                    onEndEditing={(event) =>
                      setEventData({
                        ...eventData,
                        description: event.nativeEvent.text,
                      })
                    }
                  />
                </View>

                <View style={styles.TagsContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Hashtags</Text>
                  </View>

                  <TextInput
                    style={styles.textInput}
                    placeholder="#"
                    placeholderTextColor="#CDCDCD"
                    onChangeText={(textTag) => {
                      let tags = textTag.split(' ');
                      setEventData({
                        ...eventData,
                        tags
                      })
                    }}
                  />
                </View>

                <View style={styles.dateContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Start</Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVisibleStart(true)}
                  >
                    <View style={styles.textInput}>
                      <Text style={{ color: color, fontSize: 16 }}>
                        {readableDate(eventData.beginningTime)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.dateContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>End</Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVisibleEnd(true)}
                  >
                    <View style={styles.textInput}>
                      <Text style={{ color: color, fontSize: 16 }}>
                        {readableDate(eventData.endingTime)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    //width: "100%",
                    marginVertical: hsize(40),
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#E9E8E8",
                        borderRadius: 5,
                        height: hsize(40),
                        width: wsize(100),
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "red", // On cancel alert
                        }}
                      >
                        Cancel
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={
                      insertEvent /*.then(
                    Haptics.notificationAsync(
                      Haptics.NotificationFeedbackType.Success
                    ) */}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#E9E8E8",
                        borderRadius: 5,
                        height: hsize(40),
                        width: wsize(100),
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#743cff",
                        }}
                      >
                        Confirm
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default AddScreen;
