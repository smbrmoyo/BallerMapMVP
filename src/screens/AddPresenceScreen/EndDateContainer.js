import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function EndDateContainer(props) {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>End</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.setVisibleEnd(true)}
      >
        <View style={styles.textInput}>
          <Text
            style={{
              color: props.colorEnd,
              fontSize: 16,
            }}
          >
            {props.readableDate(props.endingTime)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
