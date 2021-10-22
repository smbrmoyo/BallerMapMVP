import React, { useState, useRef, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Animated from "react-native-reanimated";
import styles from "./styles";
import BottomSheetEdit from "./BottomSheetEdit";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { wsize, hsize } from "../../utils/Dimensions";
import Entypo from "react-native-vector-icons/Entypo";
import { updateUserProfile } from "../../aws-functions/userFunctions";
import PictureContainer from "./PictureContainer";
import BioContainer from "./BioContainer";
import UsernameContainer from "./UsernameContainer";
import WebsiteContainer from "./WebsiteContainer";
import ButtonContainer from "./ButtonContainer";

const EditProfileScreen = ({ props, navigation, route }) => {
  const username = "";
  const [color, setColor] = useState("#CDCDCD");
  const headerHeight = useHeaderHeight();
  const { colors, dark } = useTheme();
  const { profileDoc } = useProfile();
  const [userProfile, setUserProfile] = useState(profileDoc);

  bsEditProf = useRef(null);
  fallEditProf = useRef(new Animated.Value(1)).current;

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
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheetEdit />

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
                <PictureContainer />

                <UsernameContainer
                  profileDoc={profileDoc}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />

                <BioContainer
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />

                <WebsiteContainer
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />
                <ButtonContainer
                  then={updateUserProfile(userProfile).then}
                  navigation={navigation}
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
