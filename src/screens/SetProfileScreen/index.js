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
import * as Haptics from "expo-haptics";

import BottomSheet from "reanimated-bottom-sheet";

import Animated from "react-native-reanimated";
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
import { ProfileProvider } from "../../components/navigation/Providers/ProfileProvider";

//navigator.geolocation = require("@react-native-community/geolocation");

const SetProfileScreen = ({ props, navigation, route }) => {
  const username = "";
  const [color, setColor] = useState("#CDCDCD");
  const headerHeight = useHeaderHeight();
  const [userProfile, setUserProfile] = useState({
    username: "",
    bio: "",
    website: "",
    profilePicture: null,
  });

  var bsEditProf = useRef(null);
  var fallEditProf = useRef(new Animated.Value(1)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        height: 80,
        //shadowColor: "black",
        //elevation: 5,
      },
      //headerTitleAlign: 'left',
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,

      headerRight: () => (
        <View style={{ flexDirection: "row", marginHorizontal: wsize(10) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                navigation.navigate("Map")
              )
            } // Should edit profile on onpress
            style={{ justifyContent: "center" }}
          >
            <View style={styles.iconContainer}>
              <Feather name="check" size={24} color="#743cff" />
            </View>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => console.log("takePhotoFromCamera")}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => console.log("choosePhotoFromLibrary")}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bsEditProf.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheet
        ref={bsEditProf}
        snapPoints={["50%", -5]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fallEditProf}
        enabledGestureInteraction={true}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        keyboardVerticalOffset={headerHeight}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <ScrollView style={{ flex: 1, padding: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                bsEditProf.current.snapTo(1);
                Keyboard.dismiss;
              }}
            >
              <Animated.View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  opacity: Animated.add(
                    0.1,
                    Animated.multiply(fallEditProf, 1.0)
                  ),
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => bsEditProf.current.snapTo(0)}
                  >
                    <ProfilePicture
                      uri={require("../../assets/images/default_profile_picture.png")}
                      size={80}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.descriptionContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Username</Text>
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
                    placeholder=""
                    placeholderTextColor="#CDCDCD"
                    onEndEditing={(event) =>
                      setUserProfile({
                        ...userProfile,
                        username: event.nativeEvent.text,
                      })
                    }
                  />
                </View>

                <View style={styles.descriptionContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Bio</Text>
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
                    placeholder="0/50"
                    multiline
                    placeholderTextColor="#CDCDCD"
                    onEndEditing={(event) =>
                      setUserProfile({
                        ...userProfile,
                        bio: event.nativeEvent.text,
                      })
                    }
                  />
                </View>

                <View style={styles.TagsContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Website</Text>
                  </View>

                  <TextInput
                    style={styles.textInput}
                    placeholder=""
                    placeholderTextColor="#1d599d"
                    onEndEditing={(event) =>
                      setUserProfile({
                        ...userProfile,
                        website: event.nativeEvent.text,
                      })
                    }
                  />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SetProfileScreen;
