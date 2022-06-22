import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

export default function Title() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.header}>
        <Text style={styles.text_header}>Verify your email</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
