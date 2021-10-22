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

export default function UsernameContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            color: props.colors.text,
          },
        ]}
      >
        Username
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={props.colors.text} size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.colors.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(username) => props.textInputChange(username)}
        />
        {props.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
    </View>
  );
}
