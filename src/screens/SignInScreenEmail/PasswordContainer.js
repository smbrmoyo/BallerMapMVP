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

export default function PasswordContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            color: props.colors.text,
            marginTop: 35,
          },
        ]}
      >
        Password
      </Text>
      <View style={styles.action}>
        <Feather name="lock" color={props.colors.text} size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
          secureTextEntry={props.dataLogin.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              color: props.colors.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(userPassword) =>
            props.handlePasswordChange(userPassword)
          }
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.updateSecureTextEntry}
        >
          {props.dataLogin.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>

      {props.dataLogin.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        </Animatable.View>
      )}
    </View>
  );
}
