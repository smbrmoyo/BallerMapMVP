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
                  console.log("SIGNUP Success: " + res);

                  if (res === props.dataSignUp.username) {
                    props.navigation.navigate("ConfirmSignUp", {
                      username: props.dataSignUp.username,
                      email: props.dataSignUp.email,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
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
