import React from "react";
import { Dimensions, Text, View } from "react-native";
import styles from "./styles";
import { hsize } from "../../utils/Dimensions";

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
        justifyContent: "center",
      }}
    >
      <Text style={styles.textHeader}>Create Your Profile</Text>
    </View>
  );
}
