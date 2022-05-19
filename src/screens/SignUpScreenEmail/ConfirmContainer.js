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
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";

export default function ConfirmContainer(props) {
  return (
    <View>
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
            props.dataSignUp.confirm_secureTextEntry ? true : false
          }
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(userPassword) =>
            props.handleConfirmPasswordChange(userPassword)
          }
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.updateConfirmSecureTextEntry}
        >
          {props.dataSignUp.confirm_secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {props.dataSignUp.isValidConfirmPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Not matching password.</Text>
        </Animatable.View>
      )}
    </View>
  );
}
