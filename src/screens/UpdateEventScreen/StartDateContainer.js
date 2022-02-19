import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function StartDateContainer(props) {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Start</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.setVisibleStart(true)}
      >
        <View style={styles.textInput}>
          <Text
            style={{
              color: props.colorBegin,
              fontSize: 16,
            }}
          >
            {props.readableDate(props.beginningTime)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
