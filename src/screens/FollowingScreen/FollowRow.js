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
          user: {
            id: props.item.key,
            //photo: item.photoURL,
            userName: props.item.name,
          },
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
              __letch
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              Maxime Tchagou
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: props.isFollowing ? "#D8D8D8" : "#743cff",
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 5,
            height: hsize(30),
            width: "25%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity activeOpacity={0.7} onPress={props.onFollowPress}>
            <Text
              style={{
                fontSize: 16,
                color: props.isFollowing ? "black" : "white",
              }}
            >
              {props.isFollowing ? "Remove" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
