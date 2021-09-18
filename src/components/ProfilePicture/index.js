import React from "react";
import { Image, View, ImageBackground } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ uri, size = 60, onEdit = false }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size + 3, height: size + 3, borderRadius: size / 1.5 },
      ]}
    >
      <ImageBackground
        source={uri}
        resizeMode="cover"
        imageStyle={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
    </View>
  );
};

export default ProfilePicture;
