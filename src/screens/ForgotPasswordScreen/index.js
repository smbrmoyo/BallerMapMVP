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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Haptics from "expo-haptics";

import { hsize } from "../../utils/Dimensions";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";
import Title from "./Title";

const ForgotPasswordScreen = ({ navigation }) => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const route = useRoute();
  const { colors } = useTheme();

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
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              keyboardType="email-address"
              onEndEditing={(event) => setEmail(event.nativeEvent.text)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signIn}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                  () => {
                    forgotPassword(email)
                      .then(() => {
                        navigation.navigate("SetNewPassword", { email: email });
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

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                  () => {
                    forgotPassword(email)
                      .then(() => {
                        navigation.navigate("SetNewPassword");
                      })
                      .catch((error) => {
                        JSON.stringify(error);
                        Alert.alert("This email does not exist");
                      });
                  }
                );
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

export default ForgotPasswordScreen;
