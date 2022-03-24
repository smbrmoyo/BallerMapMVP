import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";

export default function ProfileBottomContainer(props) {
  return (
    <View style={styles.profileInfoContainer}>
      <View style={styles.profileInfo}>
        <Entypo name="location-pin" size={24} color={"#743cff"} />
        <Text style={styles.textInfo}>{props.event?.place?.address}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
        <Text style={styles.time}> Created by</Text>
        <Text style={styles.created}>{props.event?.creator?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
        <Text style={styles.time}>
          {" "}
          {props.readableDate(props.beginningTime)} at{" "}
          {props.readableTime(props.beginningTime)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
