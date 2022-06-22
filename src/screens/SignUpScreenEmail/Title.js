import React from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

export default function Title() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign Up </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
