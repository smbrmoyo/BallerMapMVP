import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { hsize } from "../../utils/Dimensions";
import { Data } from "./data";

const bgs = ["#743cff", "#6b32fa", "#6124f8", "#4f0af8"];
const { height, width } = Dimensions.get("screen");

const Indicator = ({ scrollX }) => {
  return (
    <View style={styles.indicatorContainer}>
      {Data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.7, 1.4, 0.7],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.7, 1, 0.7],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${index}`}
            style={{
              ...styles.indicator,
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const OnboardingScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={Data}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: hsize(100) }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imageContainer}>
              <View style={styles.imageSubContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.text}>
                <Text
                  style={{ fontSize: 28, color: "white", fontWeight: "800" }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 12, color: "white", fontWeight: "500" }}
                >
                  {item.description}
                </Text>
              </View>
              {index === Data.length - 1 ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("SignInEmail")}
                  style={styles.doneContainer}
                >
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                  >
                    DONE
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default OnboardingScreen;
