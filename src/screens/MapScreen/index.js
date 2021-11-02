import React, { useLayoutEffect } from "react";
import { View, StatusBar, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import HomeMap from "../../components/HomeMap";
import { useMap } from "../../components/navigation/Providers/MapProvider";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";
import Loading from "./Loading";

const MapScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 100;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
  const { status, places } = useMap();

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

      {status == "loading" && places != undefined ? (
        <Loading CARD_HEIGHT={CARD_HEIGHT} CARD_WIDTH={CARD_WIDTH} />
      ) : (
        <View style={styles.screen}>
          <HomeMap navigation={navigation} />
        </View>
      )}
    </>
  );
};

export default MapScreen;
