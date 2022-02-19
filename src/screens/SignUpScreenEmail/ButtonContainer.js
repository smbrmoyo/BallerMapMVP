import React, { useContext, useState, useEffect } from "react";
import { Alert, View, Text, Button, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function ButtonContainer(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.signIn}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
            if (
              props.dataSignUp.password &&
              props.dataSignUp.isValidConfirmPassword &&
              props.dataSignUp.username &&
              props.dataSignUp.email
            ) {
              props
                .signUp(props.dataSignUp.email, props.dataSignUp.password)
                .then((res) => {
                  if (res === props.dataSignUp.username) {
                    props.navigation.navigate("ConfirmSignUp", {
                      username: props.dataSignUp.username,
                      email: props.dataSignUp.email,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                  if (error == "UsernameExistsException") {
                    Alert.alert(
                      "Error",
                      "An account with this" + "username already exists"
                    );
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
            Sign Up
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate("SignInEmail")}
        style={[styles.signIn]}
      >
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>Already have an account?</Text>
          <Text
            style={[
              styles.color_textPrivate,
              {
                fontWeight: "bold",
              },
            ]}
          >
            {" "}
            Sign In
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
