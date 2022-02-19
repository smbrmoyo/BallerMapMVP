import React from "react";
import { View, TextInput } from "react-native";
import debounce from "lodash/debounce";

import styles from "./styles";

export default function SearchBarPlaces(props) {
  return (
    <View style={styles.headerContainer}>
      <TextInput //autoFocus
        autoFocus
        onChangeText={props.onChangeTextDebounced}
        value={props.text}
        placeholder="Search"
        placeholderTextColor="#CDCDCD"
        style={[styles.inputBox]}
      />
    </View>
  );
}
