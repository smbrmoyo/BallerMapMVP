import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

export default function WebsiteContainer(props) {
  return (
    <View style={styles.TagsContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Website</Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="www."
        placeholderTextColor="#1d599d"
        onEndEditing={(event) =>
          props.setUserProfile({
            ...props.userProfile,
            website: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}
