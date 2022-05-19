import React, { useLayoutEffect } from "react";
import { View, StatusBar, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import HomeMap from "../../components/HomeMap";
import { useMap } from "../../components/navigation/Providers/MapProvider";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

export default function Loading(props) {
  return (
    <View style={styles.screenLoading}>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginBottom: 20,
          borderColor: "#E1E9EE",
          borderWidth: 1,
          paddingVertical: hsize(10),
          paddingHorizontal: wsize(20),
          borderRadius: 20,
          height: props.CARD_HEIGHT,
          width: props.CARD_WIDTH,
        }}
      >
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  width: 120,
                  height: 20,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: 80,
                  height: 20,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
    </View>
  );
}
