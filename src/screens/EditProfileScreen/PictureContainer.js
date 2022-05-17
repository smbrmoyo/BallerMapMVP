import React from "react";
import { View, TouchableOpacity } from "react-native";

import ProfilePicture from "../../components/ProfilePictureUser";

export default function PictureContainer(props) {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          bsEditProf.current.snapTo(0);
        }}
      >
        <ProfilePicture
          uri={props.userProfile.profilePicture.toString()}
          size={80}
        />
      </TouchableOpacity>
    </View>
  );
}
