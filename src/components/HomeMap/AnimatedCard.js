import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import ProfilePicture from "../ProfilePicturePlace";
import styles from "./styles";

export default function AnimatedCard(props) {
  //props.placeIndex = props.index;
  // console.log(props.index);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        bsMap.current.snapTo(0);
      }}
    >
      <Animated.View style={[styles.card]}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.goToStory}>
          <ProfilePicture />
        </TouchableOpacity>
        <View style={styles.textContent}>
          <Text numberOfLines={1} style={styles.cardDescription}>
            {props.item.name}
          </Text>

          <Text
            style={[
              styles.textSign,
              {
                color: "grey",
              },
            ]}
          >
            {props.item.address}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
