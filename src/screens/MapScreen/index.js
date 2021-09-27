import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import HomeMap from "../../components/HomeMap";
import { useMap } from "../../components/navigation/Providers/MapProvider";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

const MapScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 100;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
  const { status } = useMap();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => null,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      {status == "loading" ? (
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
              borderRadius: 10,
              height: CARD_HEIGHT,
              width: CARD_WIDTH,
            }}
          >
            <SkeletonPlaceholder>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  //borderRadius: 10,
                  //position: "relative",
                  //bottom: 50,
                  //marginBottom: 0,
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 120, height: 20, borderRadius: 4 }} />
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
      ) : (
        <View style={styles.screen}>
          <HomeMap />
        </View>
      )}
    </>
  );
};

export default MapScreen;
