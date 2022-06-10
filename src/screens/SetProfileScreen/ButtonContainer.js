import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { useAppContext } from "../../navigation/Providers/AppProvider";

import {
  createUserDoc,
  createUserProfile,
  getAuthenticatedUser,
} from "../../aws-functions/userFunctions";
import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";

export default function ButtonContainer(props) {
  const { setIsPdoc } = useAppContext();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        //width: "100%",
        marginVertical: hsize(40),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          let input = {
            username: props.userProfile.username,
            name: props.userProfile.name,
            id: props.user,
            userDocId: props.user,
            profilePicture: props.imageUri,
          };
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          props.setCheck(true);
          createUserProfile(input)
            .then((response) => {
              if (response == undefined || response == null) {
                null;
              } else {
                setIsPdoc(true);
              }
            })
            .catch((error) => {
              Alert.alert("Error creating the profile");
            });
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 5,
            height: hsize(40),
            width: wsize(100),
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#743cff",
            }}
          >
            Confirm
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
