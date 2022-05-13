import React, { useState, useEffect } from "react";
import { ScrollView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
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
import { emailValidationString } from "../SignInScreenEmail/helpers";

const SignUpScreenEmail = ({ navigation }) => {
  const { user, signUp, signUpTrigger } = useAuth();

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
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const emailInputChange = (val) => {
    if (
      val.trim().length >= 6 &&
      val.toLowerCase().match(emailValidationString)
    ) {
      setdataSignUp({
        ...dataSignUp,
        email: val,
        username: val,
        check_emailInputChange: true,
        isValidEmail: true,
      });
    } else if (val.trim().length < 6) {
    } else {
      setdataSignUp({
        ...dataSignUp,
        email: val,
        username: val,
        check_emailInputChange: false,
        isValidEmail: false,
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
    } else if (val.trim().length < 6) {
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
              isValidEmail={dataSignUp.isValidEmail}
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
