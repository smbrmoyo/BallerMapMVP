import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { hsize } from "../../utils/Dimensions";
import { EvilIcons, Ionicons, Feather, Entypo } from "@expo/vector-icons";

import styles from "./styles";

export default function ProfileContainer(props) {
  const { width } = Dimensions.get("window");

  let followers =
    props.followers != undefined
      ? props.followers
      : props.profileDoc.followers.items;
  let following = props.profileDoc.following.items;

  let date = new Date(props.profileDoc.createdAt);
  let month = date.toLocaleString("default", { month: "long" });

  return (
    <View style={styles.container}>
      <View style={styles.profileInitialContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <ProfilePicture
            uri={props.profileDoc?.profilePicture?.toString()}
            size={70}
          />
        </TouchableOpacity>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{props.profileDoc?.username}</Text>
          <Text style={styles.profileJoined}>
            {"Joined " + month + " " + date.getFullYear()}
          </Text>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfo}>
          <Entypo name="location-pin" size={25} color={"#743cff"} />
          <Text style={styles.textInfo}>{props.profileDoc?.cityCountry}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
          <EvilIcons name="link" size={20} color="black" />
          <Text style={styles.linkInfo}></Text>
        </TouchableOpacity>

        <View style={styles.userInfoWrapper}>
          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowers}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>{followers?.length}</Text>
              <Text style={styles.userInfoSubTitle}>Followers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowing}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>{following?.length}</Text>
              <Text style={styles.userInfoSubTitle}>Following</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigate("EditProfile");
          }}
        >
          <View
            style={{
              //backgroundColor: "#D8D8D8",
              marginVertical: hsize(5),
              borderWidth: 2,
              borderColor: "#E9E8E8",
              borderRadius: 5,
              height: 30,
              width: "50%",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              /*shadowColor: "grey",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,*/
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {" "}
              Edit Info{" "}
            </Text>
          </View>
        </TouchableOpacity>
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
          <Ionicons
            name="at-outline"
            size={26}
            color={props.currentTab === props.attending ? "black" : "grey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
