import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import { wsize, hsize } from "../../utils/Dimensions";
import styles from "./styles";

export default function FollowRow(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() => {
        props.navigate("OtherProfile", {
          id: props.item.followedID,
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
              }}
            >
              {props.item.followed.username}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              {props.item.followed.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
