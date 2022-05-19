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
  KeyboardAvoidingViewBase,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useHeaderHeight } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Haptics from "expo-haptics";

import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";

export default function CodeContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: hsize(15),
          },
        ]}
      >
        Code
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Verification Code"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.text,
            },
          ]}
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(text) => props.setCode(text)}
        />
      </View>
    </View>
  );
}
