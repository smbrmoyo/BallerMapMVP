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
        style={[
          styles.inputBox,
          {
            color: props.colors.text,
            backgroundColor: props.colors.background,
            borderColor: props.colors.border,
            borderWidth: props.dark ? 1 : 0.5,
          },
        ]}
      />
    </View>
  );
}
