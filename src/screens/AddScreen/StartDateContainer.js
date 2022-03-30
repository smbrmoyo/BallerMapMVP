import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import { checkStart } from "./helpers";
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
      {props.check ? (
        checkStart(props.beginningTime) ? (
          props.validate ? (
            props.setValidate(false)
          ) : null
        ) : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              The start of the event must be in the future.
            </Text>
          </Animatable.View>
        )
      ) : null}
    </View>
  );
}
