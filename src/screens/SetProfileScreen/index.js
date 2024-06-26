import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import Animated from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import BioContainer from "./BioContainer";
import PictureContainer from "./PictureContainer";
import NameContainer from "./NameContainer";
import ButtonContainer from "./ButtonContainer";
import UsernameContainer from "./UsernameContainer";
import Header from "./Header";
import BottomSheetSet from "./BottomSheetSet";
import { useAppContext } from "../../navigation/Providers/AppProvider";

const SetProfileScreen = ({ props, route }) => {
  const { user } = useAuth();
  const { isPDoc, setIsPDoc } = useAppContext();
  const [check, setCheck] = useState(false);
  const [validate, setValidate] = useState(true);
  const [imageUri, setImageUri] = useState(null);
  bsSetProf = useRef(null);
  fallSetProf = useRef(new Animated.Value(1)).current;
  const [userProfile, setUserProfile] = useState({
    //email: user,
    name: "",
    username: "",
    bio: "",
    userDocId: user,
    id: user,
  });

  useEffect(() => {
    if (isPDoc) {
      setIsPDoc(true);
    }
    /*(async () => {
      const cameraRollStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (
        cameraRollStatus.status !== "granted" ||
        cameraStatus.status !== "granted"
      ) {
        Alert.alert("Sorry, we need these permissions to make this work!");
      }
    })();*/
  }, []);

  /*useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
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
  }, []);*/

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheetSet setImageUri={setImageUri} user={user} />

      <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              bsSetProf.current.snapTo(1);
              Keyboard.dismiss;
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                opacity: Animated.add(0.5, Animated.multiply(fallSetProf, 1.0)),
              }}
            >
              <Header />

              <PictureContainer imageUri={imageUri} />

              <NameContainer
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                check={check}
                setValidate={setValidate}
                validate={validate}
              />

              <UsernameContainer
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                check={check}
                setValidate={setValidate}
                validate={validate}
              />

              <ButtonContainer
                userProfile={userProfile}
                user={user}
                setIsPDoc={setIsPDoc}
                imageUri={imageUri}
                check={check}
                setValidate={setValidate}
                setCheck={setCheck}
                validate={validate}
                //navigation={navigation}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SetProfileScreen;
