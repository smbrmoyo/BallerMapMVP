import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

export default function AnimatedAddButton(props) {
  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          right: 10,
          bottom: hsize(25),
          zIndex: 2,
          transform: [
            {
              translateY: props.heightAnim,
            },
          ],
        },
      ]}
    >
      <View
        style={[
          styles.buttonAdd,
          {
            height: wsize(50),
            width: wsize(50),
            borderRadius: wsize(25),
            marginBottom: hsize(30),
            // opacity: 0.2,
          },
        ]}
      >
        <Entypo name="direction" size={24} color="grey" />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={props.goToAdd}>
        <View style={styles.buttonAdd}>
          <Feather name="plus" size={40} color="#743cff" />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
