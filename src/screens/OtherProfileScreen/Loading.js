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
import MyEventsTab from "./MyEventsTab";

export default function Loading(props) {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        flex: 2,
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          //justifyContent: "center",
          paddingTop: hsize(5),
        }}
      >
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: wsize(10),
              paddingVertical: hsize(5),
              alignItems: "center",
            }}
          >
            <View style={{ height: 70, width: 70, borderRadius: 35 }} />

            <View
              style={{
                marginLeft: wsize(22),
                justifyContent: "center",
                alignContent: "center",
                height: hsize(50),
                width: wsize(200),
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: wsize(5),
                paddingBottom: wsize(5),
                height: hsize(50),
                width: wsize(200),
                borderRadius: 10,
              }}
            />
          </View>
        </SkeletonPlaceholder>
        <View
          style={{
            borderWidth: 1,
            height: hsize(50),
            width: "100%",
            alignItems: "center",
            borderColor: "#DADBDA",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            bottom: 0,
          }}
        >
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
            <Feather
              name="user"
              size={24}
              color={props.currentTab === props.attending ? "black" : "grey"}
            />
          </TouchableOpacity>
        </View>
      </View>
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
      </View>
    </View>
  );
}
