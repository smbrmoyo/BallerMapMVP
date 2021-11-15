import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
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

            {/* Add verification */}

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: hsize(35),
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={dataSignUp.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(userPassword) =>
                  handlePasswordChange(userPassword)
                }
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={updateSecureTextEntry}
              >
                {dataSignUp.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {dataSignUp.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animatable.View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: hsize(35),
                },
              ]}
            >
              Confirm Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={
                  dataSignUp.confirm_secureTextEntry ? true : false
                }
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(userPassword) =>
                  handleConfirmPasswordChange(userPassword)
                }
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={updateConfirmSecureTextEntry}
              >
                {dataSignUp.confirm_secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {dataSignUp.isValidConfirmPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Not matching password.</Text>
              </Animatable.View>
            )}
            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.signIn}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                    () => {
                      if (
                        dataSignUp.password &&
                        dataSignUp.isValidConfirmPassword &&
                        dataSignUp.username &&
                        dataSignUp.email
                      ) {
                        console.log("   Signing Up User");
                        signUp(dataSignUp.email, dataSignUp.password)
                          .then((res) => {
                            console.log(
                              "   SUCCESS: NEW USER SIGNED UP: " + res
                            );
                            if (res === dataSignUp.email) {
                              console.log(
                                "  ----> Heading to ConfirmSignUpSreen"
                              );
                              navigation.navigate("ConfirmSignUp", {
                                username: dataSignUp.username,
                                email: dataSignUp.email,
                              });
                            } else {
                              Alert.alert(
                                "!!! ERREUR DE LOGIQUE: L'email du Signup est différent du Text Input"
                              );
                            }
                          })
                          .catch((error) => {
                            if (error == "UsernameExistsException") {
                              Alert.alert(
                                "Impossible de sign Up",
                                "Un compte " + "avec cet email existe déjà"
                              );
                            }
                          });
                      }
                    }
                  );
                }}
              >
                <LinearGradient
                  colors={["#743cff", "#bb006e"]}
                  style={styles.signIn}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "white",
                      },
                    ]}
                  >
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("SignInEmail")}
                style={[styles.signIn]}
              >
                <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                    Already have an account?
                  </Text>
                  <Text
                    style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                  >
                    {" "}
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default SignUpScreenEmail;

{
  /*<PasswordContainer
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
/>*/
}
