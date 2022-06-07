import React from "react";
import { View, Text, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";
import { checkUsername } from "../SetProfileScreen/helpers";

export default function UsernameContainer(props) {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Username</Text>
      </View>

      <TextInput
        style={{
          padding: hsize(10),
          backgroundColor: "#eee",
          marginVertical: hsize(5),
          borderRadius: hsize(5),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}
        value={props.userProfile?.username}
        placeholder={props.profileDoc?.username}
        placeholderTextColor="#CDCDCD"
        maxLength={15}
        onChangeText={(event) =>
          props.setUserProfile({
            ...props.userProfile,
            username: event,
          })
        }
      />
      {props.check ? (
        checkUsername(props.userProfile.username) ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please type in a username.</Text>
          </Animatable.View>
        )
      ) : null}
    </View>
  );
}
