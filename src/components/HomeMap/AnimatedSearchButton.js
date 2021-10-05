import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function AnimatedSearchButton(props) {
  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          right: 15,
          top: "6.5%",
          transform: [
            {
              translateY: props.lowAnim,
            },
          ],
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={props.animate}>
        <View
          style={[
            styles.buttonAdd,
            {
              height: 40,
              width: 40,
              backgroundColor: "#eee",
              borderWidth: 0,
            },
          ]}
        >
          <Ionicons name="search" size={25} color="#743cff" />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
