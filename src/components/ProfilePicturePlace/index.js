import React from "react";
import { Image, View, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const ProfilePicturePlace = ({
  uri = require("../../assets/images/default_profile_picture.png"),
  size = 60,
  onEdit = false,
  opacity = 1,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: size + 3, height: size + 3, borderRadius: size / 1.5 },
      ]}
    >
      {
        (uri = require("../../assets/images/default_profile_picture.png") ? (
          <Entypo name="location-pin" size={30} color={"#743cff"} />
        ) : (
          <ImageBackground
            source={uri}
            resizeMode="cover"
            imageStyle={[
              styles.image,
              { width: size, height: size, borderRadius: size / 2, opacity },
            ]}
            style={[
              styles.image,
              { width: size, height: size, borderRadius: size / 2, opacity },
            ]}
          />
        ))
      }
    </View>
  );
};

export default ProfilePicturePlace;
