import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import { hsize } from "../../utils/Dimensions";

const DATA = [
  {
    key: "3571572",
    title: "Quand je mange, j'ai encore faim",
    description: "I need to work on the spacing",
    image: "https://cdn-icons-png.flaticon.com/512/7280/7280037.png",
  },
  {
    key: "3571747",
    title: "Quand je ne mange pas, j'ai faim",
    description: "I need to work on the spacing",

    image: "https://cdn-icons-png.flaticon.com/512/7280/7280037.png",
  },
  {
    key: "3571680",
    title: "Si on vole ma nourriture, je bagarre",
    description: "I need to work on the spacing",

    image: "https://cdn-icons-png.flaticon.com/512/7280/7280037.png",
  },
  {
    key: "3571603",
    title: "Et c'est là que l'eau glacée brule la maison",
    description: "I need to work on the spacing",
    image: "https://cdn-icons-png.flaticon.com/512/7280/7280037.png",
  },
];
const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const { height, width } = Dimensions.get("screen");

const Indicator = ({ scrollX }) => {
  return (
    <View style={styles.indicatorContainer}>
      {DATA.map((item, index) => {
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
        data={DATA}
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
              {index === DATA.length - 1 ? (
                <View>
                  <Text
                    style={{ fontSize: 12, color: "white", fontWeight: "500" }}
                  >
                    DONE
                  </Text>
                </View>
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
