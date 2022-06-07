import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { checkEnd } from "../AddScreen/helpers";

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
      {props.check ? (
        checkEnd(props.beginningTime, props.endingTime) ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              The End of the event must be after the start.
            </Text>
          </Animatable.View>
        )
      ) : null}
    </View>
  );
}
