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
        onPress={() => {}} // bsEditProf.current.snapTo(0)
      >
        <ProfilePicture
          /*uri={{
            uri: "https://www.soolide.com/wp-content/uploads/2021/03/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
          }}*/
          size={80}
        />
      </TouchableOpacity>
    </View>
  );
}
