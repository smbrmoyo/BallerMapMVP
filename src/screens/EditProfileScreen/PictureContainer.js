import React from "react";
import { View, TouchableOpacity } from "react-native";

import ProfilePicture from "../../components/ProfilePictureUser";

export default function PictureContainer() {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => bsEditProf.current.snapTo(0)}
      >
        <ProfilePicture
          uri={require("../../assets/avatars/derek.russel.png")}
          size={80}
          opacity={0.8}
        />
      </TouchableOpacity>
    </View>
  );
}
