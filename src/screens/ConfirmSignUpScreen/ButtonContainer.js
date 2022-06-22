import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import styles from "./styles";

export default function ButtonContainer(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.signIn}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
            props
              .confirmSignUp(props.email, props.code)
              .then((res) => {
                console.log("Réponse de la fonction confirmSIgnUp " + res);
                props.navigate("SignInEmail");
              })
              .catch((error) => {
                console.log(
                  "Erreur dans la fonction confirmSIgnUp au niveau du screen" +
                    error
                );
              });
          });
        }}
      >
        <LinearGradient colors={["#743cff", "#bb006e"]} style={styles.signIn}>
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
          props.resendConfirmationCode(props.username);
        }}
        style={[styles.signIn]}
      >
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>Didn't receive the code?</Text>
          <Text
            style={[
              styles.color_textPrivate,
              {
                fontWeight: "bold",
              },
            ]}
          >
            {" "}
            Resend it
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
