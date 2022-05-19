import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { wsize, hsize } from "../../utils/Dimensions";
import debounce from "lodash/debounce";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useMap } from "../../components/navigation/Providers/MapProvider";

export default function FollowRow({ item, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() => {
        navigation.navigate("OtherProfile", {
          id: item.id,
        });
      }}
    >
      <View style={styles.postHeaderContainer}>
        <View
          style={{
            flexDirection: "row",
            //flex: 1,
            //paddingHorizontal: wsize(5),
            paddingVertical: hsize(10),
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ProfilePicture size={50} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: wsize(15),
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              {item.username}
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: added === true ? "#D8D8D8" : "#743cff",
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 50,
            //height: hsize(30),
            //width: "25%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
}
