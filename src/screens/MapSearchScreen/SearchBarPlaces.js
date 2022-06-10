import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchBar } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import debounce from "lodash/debounce";

import LoadingScreen from "../LoadingScreen";
import styles from "./styles";
import people from "../../assets/data/people";
import places from "../../assets/data/placesJSON";
import PlaceRow from "./PlaceRow";
import { hsize, wsize } from "../../utils/Dimensions";
import { useMap } from "../../navigation/Providers/MapProvider";
import { getPlacesList } from "../../aws-functions/placeFunctions";

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
