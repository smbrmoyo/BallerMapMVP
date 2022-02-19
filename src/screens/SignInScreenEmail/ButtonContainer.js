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

export default function ButtonContainer(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.signIn}
        onPress={async () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
            async () => {
              if (!props.dataLogin.email) {
                Alert.alert("Enter your email address");
                return false;
              } else if (!props.dataLogin.password) {
                Alert.alert("Enter your password");
                return false;
              }
              await props
                .signIn(props.dataLogin.email, props.dataLogin.password)
                .then((res) => {
                  if (res) {
                    AsyncStorage.setItem(
                      "currentUserCreds",
                      JSON.stringify({
                        email: props.dataLogin.email,
                        password: props.dataLogin.password,
                      })
                    );
                    console.log(
                      "   User Logged IN, Credentials stored locally"
                    );
                    props.setUser(props.dataLogin.email);
                  }
                })
                .catch((error) => {
                  console.log(JSON.stringify(error));
                  if (error == "UserNotFoundException") {
                    Alert.alert("Error", "User not found");
                  } else if (error == "UserNotConfirmedException") {
                    Alert.alert("Error", "User not confirmed", [
                      {
                        text: "OK",
                        onPress: () => {
                          resendConfirmationCode(props.dataLogin.email).then(
                            () => {
                              navigation.navigate("ConfirmSignUp", {
                                username: props.dataLogin.email,
                                email: props.dataLogin.email,
                              });
                            }
                          );
                        },
                      },
                    ]);
                  } else if (error == "Incorrect username or password.") {
                    Alert.alert("Error", "Email or" + " password incorrect");
                  }
                });
            }
          );
        }}
      >
        <LinearGradient colors={["#743cff", "#bb006e"]} style={styles.signIn}>
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
        onPress={() => props.navigate("SignUpEmail")}
        style={[styles.signIn]}
      >
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>New to BallerMap?</Text>
          <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
            {" "}
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
