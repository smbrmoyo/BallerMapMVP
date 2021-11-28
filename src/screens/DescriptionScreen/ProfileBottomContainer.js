import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function ProfileBottomContainer(props) {
  return (
    <View style={styles.profileInfoContainer}>
      <View style={styles.profileInfo}>
        <SimpleLineIcons name="location-pin" size={20} color="#743cff" />
        <Text style={styles.textInfo}>{props.event?.place?.address}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
        <Feather name="user" size={21} color="black" />
        <Text style={styles.linkInfo}> by {props.event?.creator?.name}</Text>
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
