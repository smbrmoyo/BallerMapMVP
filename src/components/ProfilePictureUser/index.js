import React from "react";
import { Image, View, ImageBackground } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ size = 60, uri, onEdit = false, opacity = 1 }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size + 3, height: size + 3, borderRadius: size / 1.5 },
      ]}
    >
      <ImageBackground
        /*source={
          uri == null || uri == undefined
            ? require("../../assets/images/default_profile_picture.png")
            : { uri: uri }
        }*/
        source={{ uri: uri }}
        //onLoadEnd={() => {}}
        defaultSource={require("../../assets/images/default_profile_picture.png")}
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
    </View>
  );
};

export default ProfilePicture;
