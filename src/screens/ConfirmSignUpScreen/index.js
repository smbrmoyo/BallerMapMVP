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
import Title from "./Title";
import CodeContainer from "./CodeContainer";
import ButtonContainer from "./ButtonContainer";

const ConfirmSignUpScreen = ({ navigation }) => {
  const { confirmSignUp, resendConfirmationCode } = useAuth();
  const [code, setCode] = useState();
  const route = useRoute();
  const { colors } = useTheme();
  let username = route.params.username;
  let email = route.params.email;

  return (
    <LinearGradient colors={["#743cff", "#bb006e"]} style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Title />

        {/* username input */}
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <CodeContainer setCode={setCode} text={colors.text} />

          <ButtonContainer
            confirmSignUp={confirmSignUp}
            resendConfirmationCode={resendConfirmationCode}
            email={email}
            code={code}
            username={username}
            navigate={navigation.navigate}
          />
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default ConfirmSignUpScreen;
