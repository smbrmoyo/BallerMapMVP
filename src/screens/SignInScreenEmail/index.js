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
  const { signIn, setUser, resendConfirmationCode } = useAuth();
  const [nextScreen, setNextScreen] = useState("Map");

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
    if (email.trim().length >= 4) {
      setDataLogin({
        ...dataLogin,
        email: email,
        check_textInputChange: true,
        isValidUser: true,
      });
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
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(email) => textInputChange(email)}
            />
            {dataLogin.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={dataLogin.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(userPassword) =>
                handlePasswordChange(userPassword)
              }
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={updateSecureTextEntry}
            >
              {dataLogin.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {dataLogin.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("   pressed forgot")}
          >
            <Text style={{ color: "#743cff", marginTop: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signIn}
              onPress={async () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                  async () => {
                    /*if (nextScreen == "SetProfile") {
                      navigation.navigate(nextScreen);
                    }*/
                    if (!dataLogin.email) {
                      Alert.alert("Enter your email address");
                      return false;
                    } else if (!dataLogin.password) {
                      Alert.alert("Enter your password");
                      return false;
                    }
                    console.log("   Signing In user ");
                    await signIn(dataLogin.email, dataLogin.password)
                      .then((res) => {
                        if (res) {
                          AsyncStorage.setItem(
                            "currentUserCreds",
                            JSON.stringify({
                              email: dataLogin.email,
                              password: dataLogin.password,
                            })
                          );
                          console.log(
                            "   User Logged IN, Credentials stored locally"
                          );
                          setUser(dataLogin.email);
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        console.log("   Error signing in");
                        if (error == "UserNotFoundException") {
                          Alert.alert(
                            "Connection impossible",
                            "L'email ne correspond pas " + "a un utilisateur"
                          );
                        } else if (error == "UserNotConfirmedException") {
                          Alert.alert(
                            "Email non confirmé",
                            "Veuillez confirmer votre email" +
                              "Vous allez recevoir un " +
                              "code de confirmation par email. Vérifiez vos spams/pourriels",
                            [
                              {
                                text: "OK",
                                onPress: () => {
                                  resendConfirmationCode(dataLogin.email).then(
                                    () => {
                                      navigation.navigate("ConfirmSignUp", {
                                        username: dataLogin.email,
                                        email: dataLogin.email,
                                      });
                                    }
                                  );
                                },
                              },
                            ]
                          );
                        } else if (error == "Incorrect username or password.") {
                          Alert.alert(
                            "Impossible " + " de se connecter",
                            "Email ou" + " mot de passe incorrect"
                          );
                        }
                      });
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
                  Log In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("SignUpEmail")}
              style={[styles.signIn]}
            >
              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>New to BallerMap?</Text>
                <Text
                  style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                >
                  {" "}
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*<UsernameContainer
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
          />*/}
        </Animatable.View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreenEmail;
