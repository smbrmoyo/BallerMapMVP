import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

export default function ButtonContainer() {
  return (
    <View style={styles.userInfoWrapper}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#E9E8E8",
          borderRadius: hsize(20),
          height: hsize(40),
          width: wsize(150),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name="share" size={23} color="black" />
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          Share
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#743cff",
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: hsize(20),
            height: hsize(40),
            width: wsize(150),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="bookmark-o" size={23} color="white" />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginLeft: 10,
            }}
          >
            Confirm
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
