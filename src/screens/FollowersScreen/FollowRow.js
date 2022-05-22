import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { wsize, hsize } from "../../utils/Dimensions";
import styles from "./styles";

export default function FollowRow(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() => {
        props.navigate("OtherProfile", {
          id: props.item.followerID,
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
          <ProfilePicture
            uri={props.item?.follower?.profilePicture}
            size={50}
          />
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
              {props.item.follower.username}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              {props.item.follower.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
