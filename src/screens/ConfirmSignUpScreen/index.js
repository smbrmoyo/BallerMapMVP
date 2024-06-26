import React, { useEffect, useState } from "react";
import {
  Alert,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Haptics from "expo-haptics";

import { hsize } from "../../utils/Dimensions";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";
import Title from "./Title";

const ConfirmSignUpScreen = ({ navigation }) => {
  const { confirmSignUp, resendConfirmationCode } = useAuth();
  const [code, setCode] = useState();
  const route = useRoute();
  const { colors } = useTheme();
  let username = route.params.username;
  const email = route.params.email;

  useEffect(() => {
    console.log(
      "\n",
      "\n",
      "<------------- ConfirmSignUpScreen ---------------->"
    );
  });

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
            <Ionicons name="keypad-outline" size={20} color="#05375a" />
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
              onEndEditing={(event) => setCode(event.nativeEvent.text)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signIn}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                  () => {
                    confirmSignUp(email, code)
                      .then((res) => {
                        navigation.navigate("SignInEmail");
                      })
                      .catch((error) => {
                        console.log(
                          "      Erreur dans la confirmation du User" + error
                        );
                        Alert.alert(
                          "Impossible de confirmer l'identité",
                          error
                        );
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
                  Confirm Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={async () => {
                console.log("   Resending confirmation to user");
                await resendConfirmationCode(email)
                  .then((res) => {
                    Alert.alert(
                      "New Confirmation code",
                      `New confirmation sent to ${email}. Check your spams`
                    );
                  })
                  .catch((error) => {
                    Alert.alert("ERROR resending confirmation code", error);
                    console.log("   ERREUR resending confirmation code");
                  });
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
          {/*<CodeContainer setCode={setCode} text={colors.text} />

          <ButtonContainer
            confirmSignUp={confirmSignUp}
            resendConfirmationCode={resendConfirmationCode}
            email={email}
            code={code}
            username={username}
            navigate={navigation.navigate}
            />*/}
        </Animatable.View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default ConfirmSignUpScreen;
