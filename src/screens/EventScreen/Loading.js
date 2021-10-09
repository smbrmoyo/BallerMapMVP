import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import { wsize, hsize } from "../../utils/Dimensions";
import { EvilIcons, SimpleLineIcons, Feather } from "@expo/vector-icons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import styles from "./styles";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-evenly",
      }}
    >
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            height: styles.postHeaderFirst.height,
            width: styles.postHeaderFirst.width,
            marginVertical: hsize(10),
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </SkeletonPlaceholder>
    </View>
  );
};

export default Loading;
