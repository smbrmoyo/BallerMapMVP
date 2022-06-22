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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Animated from "react-native-reanimated";
import styles from "./styles";
import BottomSheetEdit from "./BottomSheetEdit";
import { useProfile } from "../../navigation/Providers/ProfileProvider";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { hsize } from "../../utils/Dimensions";
import Entypo from "react-native-vector-icons/Entypo";
import PictureContainer from "./PictureContainer";
import UsernameContainer from "./UsernameContainer";
import ButtonContainer from "./ButtonContainer";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateUprofile } from "../../graphql/subscriptions";

const EditProfileScreen = ({ props, navigation, route }) => {
  const { user } = useAuth();
  const { profileDoc, setProfileDoc } = useProfile();
  const [userProfile, setUserProfile] = useState(profileDoc);
  const [check, setCheck] = useState(false);
  const [validate, setValidate] = useState(true);

  bsEditProf = useRef(null);
  fallEditProf = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const subscribeToUpdateProfile = API.graphql(
      graphqlOperation(onUpdateUprofile, { id: user })
    ).subscribe({
      next: async ({ value }) => {
        console.log(value.data.onUpdateUprofile);
        setProfileDoc({
          ...profileDoc,
          username: value.data.onUpdateUprofile.username,
          cityCountry: value.data.onUpdateUprofile.cityCountry,
          profilePicture: value.data.onUpdateUprofile.profilePicture,
        });
      },
      error: (error) => console.log(error),
    });

    return () => subscribeToUpdateProfile.unsubscribe();
  }, []);

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
            <Text style={styles.textHeader}>Edit Profile</Text>
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
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheetEdit
        setUserProfile={setUserProfile}
        userProfile={userProfile}
        user={user}
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
                    0.5,
                    Animated.multiply(fallEditProf, 1.0)
                  ),
                }}
              >
                <PictureContainer userProfile={userProfile} />

                <UsernameContainer
                  profileDoc={profileDoc}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  check={check}
                  setValidate={setValidate}
                  validate={validate}
                />

                <ButtonContainer
                  userProfile={userProfile}
                  navigation={navigation}
                  check={check}
                  setCheck={setCheck}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditProfileScreen;
