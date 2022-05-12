import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ForgotContainer(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.navigate("ForgotPassword")}
    >
      <Text
        style={{
          color: "#743cff",
          marginTop: 15,
        }}
      >
        Forgot password?
      </Text>
    </TouchableOpacity>
  );
}
