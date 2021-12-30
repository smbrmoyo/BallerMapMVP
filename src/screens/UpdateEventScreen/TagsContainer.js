import React from "react";
import { View, Text, TextInput, ScrollView, FlatList } from "react-native";

import styles from "./styles";
import HashTagCard from "./HashTagCard";

export default function TagsContainer(props) {
  return (
    <View style={styles.TagsContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Hashtags</Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="#"
        multiline
        color="black"
        defaultValue={props.eventData.description}
        placeholderTextColor="#CDCDCD"
        onEndEditing={(event) => {
          let tags = event.nativeEvent.text.split(" ");
          props.setEventData({ ...props.eventData, tags });
        }}
      />
    </View>
  );
}
