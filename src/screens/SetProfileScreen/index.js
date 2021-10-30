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
import Animated from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native"
import { wsize, hsize } from "../../utils/Dimensions";
import BioContainer from "./BioContainer";
import PictureContainer from "./PictureContainer";
import NameContainer from "./NameContainer";
import ButtonContainer from "./ButtonContainer";
import UsernameContainer from "./UsernameContainer";
import {useAppContext} from "../../components/navigation/Providers/AppProvider";

const SetProfileScreen = ({ props, route }) => {
  const { user } = useAuth();
  const {isPDoc, setIsPDoc} = useAppContext();
  const [color, setColor] = useState("#CDCDCD");
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

  useEffect(() => {
    console.log("<------------- SETPROFILESCREEN ---------------->")
    if(isPDoc) {
      Alert.alert("ERREUR DE LOGIQUE!!!!",
          "isPDoc est true dans le SetProfileScreen" );
      console.log("ERREUR de logique: ----> Le isPDoc est true dans le SetProfileScreen")
      setIsPDoc(true)
    }

  })
  /*
  Logic used to get userDocId is good. Should be done on signin/signUp.
  Will give some time to AsyncStorage to store value of userDocId and make it available for other operations
  userProfile should be created well after creation of userDoc
  on userProfile creation, should insert uProfileId into userDoc to make connection
  */

  /*useLayoutEffect(() => {
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
  }, []);*/

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
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
                Keyboard.dismiss;
              }}
            >
              <Animated.View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <PictureContainer />

                <NameContainer
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />

                <UsernameContainer
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />

                <BioContainer
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />
                <ButtonContainer
                  userProfile={userProfile}
                  user={user}
                  //navigation={navigation}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SetProfileScreen;
