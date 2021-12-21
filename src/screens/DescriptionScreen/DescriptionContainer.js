import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { hsize, wsize } from "../../utils/Dimensions";
import people from "../../assets/data/people";

export default function DescriptionContainer(props) {
  return (
    <ScrollView
      style={{
        paddingHorizontal: wsize(20),
        marginVertical: hsize(10),
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
          marginBottom: hsize(20),
        }}
      >
        Description
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={{
          //flexDirection: "row",
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 2,
          shadowOpacity: 0.4,
          elevation: 2.5,
          borderRadius: 10,
        }}
      >
        <Text style={{ margin: 5 }}>{props.description}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
