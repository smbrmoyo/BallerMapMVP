import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { wsize } from "../../utils/Dimensions";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import styles from "./styles";

export default function ProfileContainer(props) {
  const { width, height } = Dimensions.get("window");
  let followers = props.otherUser?.followers?.items;
  let following = props.otherUser?.following?.items;

  let date = new Date(props.otherUser?.createdAt);
  let month = date.toLocaleString("default", { month: "long" });

  return (
    <View style={styles.container}>
      <View style={styles.profileInitialContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <ProfilePicture uri={props.otherUser?.profilePicture} size={70} />
        </TouchableOpacity>
        <View style={styles.profileNameContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.profileName}
          >
            {props.otherUser?.username}
          </Text>
          <Text style={styles.profileJoined}>
            {"Joined " + month + " " + date.getFullYear()}
          </Text>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfo}>
          <Entypo name="location-pin" size={25} color={"#743cff"} />
          <Text style={styles.textInfo}>{props.otherUser?.cityCountry}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
          <EvilIcons name="link" size={20} color="black" />
          <Text style={styles.linkInfo}>userExtraInfo.link</Text>
        </TouchableOpacity>

        <View style={styles.profileFollowedBy}>
          <Text style={styles.textInfo}>
            {followers?.length >= 1 ? "Followed by " : null}
          </Text>
          <Text
            //multiline={true}
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{ fontSize: wsize(12), fontWeight: "bold", width: "80%" }}
          >
            {followers?.length >= 1 ? followers[0].follower?.username : null}
            {followers.length == 2
              ? " and " + followers[1].follower?.username
              : null}
            {followers?.length > 2
              ? ", " + followers[2].follower?.username
              : null}
            {followers?.length > 2 ? " and  others" : null}
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
          <TouchableOpacity
            style={{
              backgroundColor: props.isFollowing ? "white" : "#743cff",
              borderWidth: 1,
              borderColor: "#E9E8E8",
              borderRadius: 5,
              height: 30,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.7}
            onPress={props.onFollowPress}
          >
            {props.followLoading ? (
              <ActivityIndicator
                /*style={{
                                                                                                  position: "absolute",
                                                                                                  bottom: hsize(150),
                                                                                                  alignSelf: "center",
                                                                                                }}*/
                size="small"
                color="#743cff"
              />
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: props.isFollowing ? "black" : "white",
                }}
              >
                {props.isFollowing ? "Following" : "Follow"}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.setCurrentTab("myEvents");
            props._scrollView.current.scrollTo({ x: -width });
          }}
          style={{ alignItems: "center", flex: 2 }}
        >
          <Feather
            name="list"
            size={23}
            color={props.currentTab === "myEvents" ? "black" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props._scrollView.current.scrollTo({ x: width });
            props.setCurrentTab("attending");
          }}
          style={{ alignItems: "center", flex: 2 }}
        >
          <Ionicons
            name="at-outline"
            size={26}
            color={props.currentTab === "attending" ? "black" : "grey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
