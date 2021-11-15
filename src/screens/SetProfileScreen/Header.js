import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { View, Text, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import * as Haptics from "expo-haptics";
import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";

export default function Header(props) {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        height: hsize(50),
        width,
        alignItems: "center",
        borderBottomColor: "#CDCDCD",
        borderBottomWidth: 0.5,
      }}
    >
      <Text style={styles.textHeader}>Create Your Profile</Text>
    </View>
  );
}
