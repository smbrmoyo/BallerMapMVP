import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useCode, Value, set, eq, cond, not } from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { TapGestureHandler, State } from "react-native-gesture-handler";

const TryScreen = () => {
  const { width } = Dimensions.get("window");

  return (
    <>
      <ScrollView></ScrollView>
      <ScrollView
        horizontal
        pagingEnabled
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        ContentContainerStyle={{
          flex: 1,
          alignItems: "center",
        }}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate={"fast"}
      >
        <View style={{ flex: 2, backgroundColor: "red", width: width }}>
          <Text>FIRST</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "blue", width: width }}>
          <Text>FIRST</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default TryScreen;
