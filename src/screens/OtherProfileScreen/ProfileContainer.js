import React, {
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import ProfilePicture from "../../components/ProfilePicture";
import FollowButton from "../../components/FollowButton";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { wsize, hsize } from "../../utils/Dimensions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import people from "../../assets/data/people";
import UserModal from "../ProfileScreen/UserModal";
import MyEventsTab from "./MyEventsTab";
import styles from "./styles";
import {
  createUserConnection,
  followUser,
} from "../../aws-functions/userFunctions";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

export default function ProfileContainer(props) {
  const { width, height } = Dimensions.get("window");
  let followers = props.otherUser.followers.items;
  let following = props.otherUser.following.items;

  let date = new Date(props.otherUser.createdAt);
  let month = date.toLocaleString("default", { month: "long" });

  return (
    <View style={styles.container}>
      <View style={styles.profileInitialContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigate("Story")}
        >
          <ProfilePicture size={70} />
        </TouchableOpacity>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{props.otherUser?.username}</Text>
          <Text style={styles.profileJoined}>
            {"Joined " + month + " " + date.getFullYear()}
          </Text>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfo}>
          <SimpleLineIcons name="location-pin" size={20} color="#743cff" />
          <Text style={styles.textInfo}>
            {/*userExtraInfo.city*/}
            Paris, Rue du con
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
          <EvilIcons name="link" size={20} color="black" />
          <Text style={styles.linkInfo}>userExtraInfo.link</Text>
        </TouchableOpacity>

        <View style={styles.profileInfo}>
          <Text style={styles.textInfo}>Followed by </Text>
          <Text
            multiline={true}
            style={{ fontSize: wsize(12), fontWeight: "bold" }}
          >
            {followers.length >= 1 ? followers[0].follower.username : null}
            {followers.length >= 2
              ? ", " + followers[0].follower.username
              : null}
            {followers.length > 2
              ? " and " + followers.length - 2 + " others"
              : null}
          </Text>
        </View>
        <View style={styles.userInfoWrapper}>
          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowers}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>{followers.length}</Text>
              <Text style={styles.userInfoSubTitle}>Followers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowing}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>{following.length}</Text>
              <Text style={styles.userInfoSubTitle}>Following</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E9E8E8",
              borderRadius: 5,
              height: 30,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Message
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={props.onFollowPress}>
            <View
              style={{
                backgroundColor: props.isFollowing ? "white" : "#743cff",
                borderWidth: 1,
                borderColor: "#E9E8E8",
                borderRadius: 5,
                height: 30,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: props.isFollowing ? "black" : "white",
                }}
              >
                {props.isFollowing ? "Following" : "Follow"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.setCurrentTab(props.events);
            props._scrollView.current.scrollTo({ x: -width });
          }}
          style={{ alignItems: "center", flex: 2 }}
        >
          <Feather
            name="list"
            size={23}
            color={props.currentTab === props.events ? "black" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props._scrollView.current.scrollTo({ x: width });
            props.setCurrentTab(props.attending);
          }}
          style={{ alignItems: "center", flex: 2 }}
        >
          <Feather
            name="user"
            size={24}
            color={props.currentTab === props.attending ? "black" : "grey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
