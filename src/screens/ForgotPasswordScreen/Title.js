import React from "react";
import { Alert, View, Text, TouchableWithoutFeedback } from "react-native";

import styles from "./styles";

export default function Title() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.header}>
        <Text style={styles.text_header}>Type in your email</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
