import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function AnimatedAddButton(props) {
  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          right: 10,
          bottom: 60,
          transform: [
            {
              translateY: props.heightAnim,
            },
          ],
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={props.goToAdd}>
        <View style={styles.buttonAdd}>
          <Feather name="plus" size={40} color="#743cff" />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
