import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import { hsize } from "../../utils/Dimensions";
import { EvilIcons, SimpleLineIcons, Feather } from "@expo/vector-icons";

import styles from "./styles";

function TabContainer(props) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity>
        <Feather name="list" size={23} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default function ProfileContainer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileInitialContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <ProfilePicture size={70} />
        </TouchableOpacity>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{props.profileDoc?.username}</Text>
          <Text style={styles.profileType}>userExtraInfo.status</Text>
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

        <View style={styles.userInfoWrapper}>
          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowers}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>1000</Text>
              <Text style={styles.userInfoSubTitle}>Followers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={props.goToFollowing}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>100</Text>
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
      <TabContainer />
    </View>
  );
}
