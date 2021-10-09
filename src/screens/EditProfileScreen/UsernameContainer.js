import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";

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
        placeholder={props.profileDoc?.username}
        placeholderTextColor="#CDCDCD"
        onEndEditing={(event) =>
          props.setUserProfile({
            ...props.userProfile,
            username: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}
