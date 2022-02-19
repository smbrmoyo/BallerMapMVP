import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";
import { useHeaderHeight } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";

import styles from "./styles";
import AgreementContainer from "./AgreementContainer";
import ButtonContainer from "./ButtonContainer";
import ConfirmContainer from "./ConfirmContainer";
import EmailContainer from "./EmailContainer";
import PasswordContainer from "./PasswordContainer";
import Title from "./Title";

const SignUpScreenEmail = ({ navigation }) => {
  const { user, signUp, signUpTrigger } = useAuth();

  const headerHeight = useHeaderHeight();
  const route = useRoute();
  const { colors } = useTheme();

  useEffect(() => {
    //isUserSignedUp();
    console.log(
      "\n",
      "\n",
      "<------------- SignUpScreenEmail ---------------->"
    );
  }, []);

  const [dataSignUp, setdataSignUp] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    check_usernameInputChange: false,
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const emailInputChange = (val) => {
    if (val.length !== 0) {
      setdataSignUp({
        ...dataSignUp,
        email: val,
        username: val,
        check_emailInputChange: true,
      });
    } else {
      setdataSignUp({
        ...dataSignUp,
        email: val,
        username: val,
        check_emailInputChange: false,
      });
    }
  };

  const usernameInputChange = (val) => {
    if (val.length !== 0) {
      setdataSignUp({
        ...dataSignUp,
        username: val,
        check_usernameInputChange: true,
      });
    } else {
      setdataSignUp({
        ...dataSignUp,
        username: val,
        check_usernameInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setdataSignUp({
        ...dataSignUp,
        password: val,
        isValidPassword: true,
      });
    } else {
      setdataSignUp({
        ...dataSignUp,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleConfirmPasswordChange = (val) => {
    if (
      val.length === dataSignUp.password.length &&
      val === dataSignUp.password
    ) {
      setdataSignUp({
        ...dataSignUp,
        confirm_password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setdataSignUp({
        ...dataSignUp,
        isValidConfirmPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setdataSignUp({
      ...dataSignUp,
      secureTextEntry: !dataSignUp.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setdataSignUp({
      ...dataSignUp,
      confirm_secureTextEntry: !dataSignUp.confirm_secureTextEntry,
    });
  };

  return (
    <LinearGradient colors={["#743cff", "#bb006e"]} style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Title />

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <EmailContainer
              text={colors.text}
              check_emailInputChange={dataSignUp.check_emailInputChange}
              emailInputChange={emailInputChange}
            />

            <PasswordContainer
              dataSignUp={dataSignUp}
              handlePasswordChange={handlePasswordChange}
              updateSecureTextEntry={updateSecureTextEntry}
            />

            <ConfirmContainer
              dataSignUp={dataSignUp}
              handleConfirmPasswordChange={handleConfirmPasswordChange}
              updateConfirmSecureTextEntry={updateConfirmSecureTextEntry}
            />

            <AgreementContainer />

            <ButtonContainer
              signUp={signUp}
              dataSignUp={dataSignUp}
              navigation={navigation}
            />
          </ScrollView>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default SignUpScreenEmail;
