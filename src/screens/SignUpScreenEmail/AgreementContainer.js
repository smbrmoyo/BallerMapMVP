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

export default function AgreementContainer() {
  return (
    <View style={styles.textPrivate}>
      <Text style={styles.color_textPrivate}>
        By signing up you agree to our
      </Text>
      <Text
        style={[
          styles.color_textPrivate,
          {
            fontWeight: "bold",
          },
        ]}
      >
        {" "}
        Terms of service
      </Text>
      <Text style={styles.color_textPrivate}> and</Text>
      <Text
        style={[
          styles.color_textPrivate,
          {
            fontWeight: "bold",
          },
        ]}
      >
        {" "}
        Privacy policy
      </Text>
    </View>
  );
}
