import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import styles from "./styles";

export default function ProfileBottomContainer(props) {
  return (
    <View style={styles.profileInfoContainer}>
      <View style={styles.profileInfo}>
        <SimpleLineIcons name="location-pin" size={20} color="#743cff" />
        <Text style={styles.textInfo}>placeLocation</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
        <EvilIcons name="link" size={22} color="black" />
        <Text style={styles.linkInfo}></Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
        <EvilIcons name="clock" size={20} color="black" />
        <Text style={styles.linkInfo}>
          {props.readableDate(props.beginningTime)} at{" "}
          {props.readableTime(props.beginningTime)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
