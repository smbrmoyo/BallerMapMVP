import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import ButtonContainer from "./ButtonContainer";
import ForgotContainer from "./ForgotContainer";
import PasswordContainer from "./PasswordContainer";
import Title from "./Title";
import UsernameContainer from "./UsernameContainer";

const SignInScreenEmail = ({ navigation, props }) => {
  const headerHeight = useHeaderHeight();
  const { signIn, setUser } = useAuth();
  const [nextScreen, setNextScreen] = useState("Map");

  useEffect(() => {
    AsyncStorage.getItem("firstLaunch").then((value) => {
      /*if (value == "true") {
        setNextScreen("SetProfile");
      }*/
    }); // Add  error handling
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const [dataLogin, setDataLogin] = useState({
    username: "",
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setDataLogin({
        ...dataLogin,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setDataLogin({
        ...dataLogin,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.length >= 8) {
      setDataLogin({
        ...dataLogin,
        password: val,
        isValidPassword: true,
      });
    } else if (val.length < 8) {
    } else {
      setDataLogin({
        ...dataLogin,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setDataLogin({
      ...dataLogin,
      secureTextEntry: !dataLogin.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <View colors={["#743cff", "#bb006e"]} style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Title />

        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: colors.background,
            },
          ]}
        >
          <UsernameContainer
            check_textInputChange={dataLogin.check_textInputChange}
            colors={colors}
            textInputChange={textInputChange}
          />

          <PasswordContainer
            dataLogin={dataLogin}
            colors={colors}
            handlePasswordChange={handlePasswordChange}
            updateSecureTextEntry={updateSecureTextEntry}
          />

          <ForgotContainer />

          <ButtonContainer
            signIn={signIn}
            setUser={setUser}
            dataLogin={dataLogin}
            navigate={navigation.navigate}
          />
        </Animatable.View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreenEmail;
