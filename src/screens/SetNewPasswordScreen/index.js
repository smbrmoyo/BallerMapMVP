import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
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
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";
import Title from "./Title";
import CodeContainer from "./CodeContainer";
import ConfirmPasswordContainer from "./ConfirmPasswordContainer";
import PasswordContainer from "./PasswordContainer";
import ButtonContainer from "./ButtonContainer";

const SetNewPasswordScreen = ({ navigation }) => {
  const { forgotPasswordSubmit } = useAuth();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const route = useRoute();
  const email = route.params?.email;
  const { colors } = useTheme();

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
          <CodeContainer setCode={setCode} />

          <PasswordContainer setPassword={setPassword} />

          <ConfirmPasswordContainer setConfirmPassword={setConfirmPassword} />

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signIn}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                  () => {
                    forgotPasswordSubmit(email, code, password)
                      .then(() => {
                        navigation.navigate("SignInEmail");
                      })
                      .catch((error) => {
                        JSON.stringify(error);
                        Alert.alert("This email does not exist");
                      });
                  }
                );
              }}
            >
              <LinearGradient
                colors={["#743cff", "#bb006e"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "white",
                    },
                  ]}
                >
                  Send Code
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default SetNewPasswordScreen;
