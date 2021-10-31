import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { wsize, hsize } from "../../utils/Dimensions";
import ProfilePicture from "../../components/ProfilePictureUser";
import styles from "./styles";

// An Event row in the FlatList

export default function NewData(props) {
  const { width, height } = Dimensions.get("window");

  return props.newData ? (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 2.5,
        borderRadius: height / 34,
        backgroundColor: "#C4C4C4",
        width: width / 4,
        height: height / 17,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
        top: hsize(10),
        zIndex: 1,
      }}
      onPress={() => {
        props.setNotifExtraData(true);
        props.setNewData(false);
      }}
    >
      <View
        style={{
          borderRadius: 5,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "center" }}>New</Text>
        <Text style={{ alignSelf: "center" }}>Activity</Text>
      </View>
    </TouchableOpacity>
  ) : null;
}
