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
//import { getUserFriends, getUserSubs } from "../../services/api/user";
import users from "../../assets/data/people";
import ProfilePicture from "../../components/ProfilePicture";
import { wsize, hsize } from "../../utils/Dimensions";
import debounce from "lodash/debounce";
import { useTheme } from "@react-navigation/native";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import LoadingScreen from "../LoadingScreen";
import {
  MaterialIcons,
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./styles";

export default function FollowRow({ item }, isFollowing, onFollowPress) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() => {
        props.navigate("OtherProfile"); /*, {
                  user: {
                    id: item.key,
                    //photo: item.photoURL,
                    userName: item.name,
                  },*/
        /*onPress={() => {
    navigation.navigate("EditProfile", {
    userExtraInfo: {
    fullName: userExtraInfo.fullName,
    photoURL: userExtraInfo.photoURL,
    userName: userExtraInfo.userName,
    status: userExtraInfo.status,
    city: userExtraInfo.city,
    link: userExtraInfo.link,
    description: userExtraInfo.description,
    email: userExtraInfo.email,
    phone: userExtraInfo.phone,
    gender: userExtraInfo.gender,
    },
    });
    }}*/
      }}
    >
      <View style={styles.postHeaderContainer}>
        <View
          style={{
            flexDirection: "row",
            //flex: 1,
            //paddingHorizontal: wsize(5),
            paddingVertical: hsize(5),
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ProfilePicture size={wsize(50)} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: wsize(20),
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
              }}
            >
              {item.username}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "grey",
              }}
            >
              {item.username}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
