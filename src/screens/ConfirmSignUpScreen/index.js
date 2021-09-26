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

const ConfirmSignUpScreen = ({ navigation }) => {
  const { confirmSignUp, resendConfirmationCode } = useAuth();
  const [code, setCode] = useState();
  const route = useRoute();
  const { colors } = useTheme();
  let username = route.params.username;
  let email = route.params.email;

  console.log("just for fun :" + JSON.stringify(route.params));

  /*if (error) {
    Alert.alert("Error signing up. Try again");
  }

  if (data) {
    // save token
    AsyncStorage.setItem("token", data.signUp.token).then(() => {
      // redirect home
      //navigation.navigate("Home");
      setUser(data.signUp.user);
      console.log(data);
    });
  }*/

  return (
    <LinearGradient colors={["#743cff", "#bb006e"]} style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          //position: "absolute",
          //bottom: 0,
          //flex: 1,
          flexGrow: 1,
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.header}>
            <Text style={styles.text_header}>Verify your email</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* username input */}
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
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
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(text) => setCode(text)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signIn}
              onPress={async() => {

                  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(async() => {
                  await confirmSignUp(email, code)
                    .then((res) => {
                      console.log("Réponse de la fonction confirmSIgnUp " + res);
                      navigation.navigate("SignInEmail");
                    })
                    .catch((error) => {
                      console.log("Erreur dans la fonction confirmSIgnUp au niveau du screen" + JSON.stringify(error));
                    })
                  })
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
                  Confirm Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                resendConfirmationCode(username);
              }}
              style={[styles.signIn]}
            >
              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                  Didn't receive the code?
                </Text>
                <Text
                  style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                >
                  {" "}
                  Resend it
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default ConfirmSignUpScreen;
