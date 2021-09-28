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
import { useHeaderHeight } from "@react-navigation/stack";
import * as Haptics from "expo-haptics";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import ProfilePicture from "../../components/ProfilePicture";
import {
  createUserDoc,
  createUserProfile,
  getAuthenticatedUser,
} from "../../aws-functions/userFunctions";
import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";
import Feather from "react-native-vector-icons/Feather";
import userConf from "../../aws-functions/userConf";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

const SetProfileScreen = ({ props, navigation, route }) => {
  const { user, createProfileDoc, setCreatedDocs } = useAuth();
  const [color, setColor] = useState("#CDCDCD");
  const headerHeight = useHeaderHeight();
  let udId = "";
  const [userProfile, setUserProfile] = useState({
    //email: user,
    name: "",
    username: "",
    bio: "",
    profilePicture: null,
    userDocId: user,
    id: user,
  });

  var bsEditProf = useRef(null);
  var fallEditProf = useRef(new Animated.Value(1)).current;

  /*
  Logic used to get userDocId is good. Should be done on signin/signUp.
  Will give some time to AsyncStorage to store value of userDocId and make it available for other operations
  userProfile should be created well after creation of userDoc
  on userProfile creation, should insert uProfileId into userDoc to make connection
  */

  /* useEffect(() => {
    async function getItem() {
      try {
        AsyncStorage.getItem("userDocId").then((value) => {
          //console.log(value);
        });
      } catch (e) {}
    }
    getItem();
  }, []);*/

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
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    });
  }, []);

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

      <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
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
                    <Text style={styles.titleText}>Full Name</Text>
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
                    placeholder="Name and Surname"
                    placeholderTextColor="#CDCDCD"
                    onEndEditing={(event) => {
                      setUserProfile({
                        ...userProfile,
                        name: event.nativeEvent.text,
                      });
                    }}
                  />
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
                    placeholder="Username"
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
                {/*<View style={styles.TagsContainer}>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Website</Text>
                  </View>

                  <TextInput
                    style={styles.textInput}
                    placeholder=""
                    placeholderTextColor="#1d599d"
                    onEndEditing={(event) =>
                      setUserProf({
                        ...userProf,
                        website: event.nativeEvent.text,
                      })
                    }
                  />
                </View>*/}
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
                    onPress={() => {
                      let input = {
                        username: userProfile.username,
                        name: userProfile.name,
                        id: user,
                        userDocId: user,
                      };

                      Haptics.impactAsync(
                        Haptics.ImpactFeedbackStyle.Medium
                      ).then(() => {
                        createUserProfile(input)
                          .then((res) => {
                            navigation.navigate("Map");
                            setCreatedDocs(true);
                          })
                          .catch((error) =>
                            console.log(
                              "error creating userProfile: " +
                                JSON.stringify(error)
                            )
                          );
                      });
                    }}
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
              </Animated.View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SetProfileScreen;
