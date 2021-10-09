import React from "react";
import { TextInput, View } from "react-native";
import debounce from "lodash/debounce";
import styles from "./styles";

export default function SearchBarFollowers(props) {
  return (
    <View style={styles.headerContainer}>
      <TextInput //autoFocus
        onChangeText={props.onChangeTextDebounced}
        value={props.text}
        placeholder="Search"
        placeholderTextColor="grey"
        style={[styles.textInput]}
      />
    </View>
  );
}
