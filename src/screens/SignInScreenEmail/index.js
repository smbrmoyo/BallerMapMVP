import React, { useState, useEffect } from "react";
import { View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Location from "expo-location";
import { useHeaderHeight } from "@react-navigation/stack";
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
import { emailValidationString } from "./helpers";

const SignInScreenEmail = ({ navigation, props }) => {
  const headerHeight = useHeaderHeight();
  const { signIn, setUser, resendConfirmationCode } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    console.log(
      "\n",
      "\n",
      "<------------- Sign In Screen Email---------------->"
    );
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

  const textInputChange = (email) => {
    if (
      email.trim().length >= 6 &&
      email.toLowerCase().match(emailValidationString)
    ) {
      setDataLogin({
        ...dataLogin,
        email: email,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else if (email.trim().length < 6) {
    } else {
      setDataLogin({
        ...dataLogin,
        email: email,
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
    } else if (val.trim().length < 6) {
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
            isValidUser={dataLogin.isValidUser}
          />

          <PasswordContainer
            dataLogin={dataLogin}
            colors={colors}
            handlePasswordChange={handlePasswordChange}
            updateSecureTextEntry={updateSecureTextEntry}
          />

          <ForgotContainer navigate={navigation.navigate} />

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
