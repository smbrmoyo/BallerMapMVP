import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ButtonContainer(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.signIn}
        onPress={async () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
            if (
              props.dataLogin.isValidPassword &&
              props.dataLogin.isValidUser
            ) {
              props
                .signIn(props.dataLogin.email, props.dataLogin.password)
                .then((res) => {
                  if (
                    res &&
                    props.dataLogin.isValidPassword &&
                    props.dataLogin.isValidUser
                  ) {
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
          });
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
