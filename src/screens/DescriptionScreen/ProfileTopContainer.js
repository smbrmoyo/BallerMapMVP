import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import styles from "./styles";

export default function ProfileTopContainer(props) {
  return (
    <View style={styles.profileInitialContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigate("TryStory")}
      >
        <ProfilePicture size={70} />
      </TouchableOpacity>
      <View style={styles.profileNameContainer}>
        <Text style={styles.profileName}>{props.event.name}</Text>
        <Text style={styles.profileType}>{props.event.description}</Text>
      </View>
    </View>
  );
}
