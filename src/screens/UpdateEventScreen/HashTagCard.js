import React from "react";
import { View, Text } from "react-native";

const HashTagCard = ({ props, navigation, hashtag }) => {
  return (
    <View style={{ borderRadius: 16 }}>
      <Text
        style={{
          borderRadius: 18,
          margin: 10,
          padding: 8,
          backgroundColor: "#F0F0F0",
          overflow: "hidden",
        }}
      >
        <Text style={{ fontSize: 16 }}>{hashtag}</Text>
      </Text>
    </View>
  );
};

export default HashTagCard;

/*<ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/images/bitmoji-image.png")}
      > */
