import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import { hsize } from "../../utils/Dimensions";

export default function DescriptionContainer(props) {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Description</Text>
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
        placeholder="In a few words"
        defaultValue={props.eventData.description}
        multiline
        placeholderTextColor="#CDCDCD"
        onEndEditing={(event) =>
          props.setEventData({
            ...props.eventData,
            description: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}
