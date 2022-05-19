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
          createUserProfile(input)
            .then((res) => {
              console.log("--- Successfully created user profile");
              setIsPdoc(true);
            })
            .catch((error) => {
              console.log(
                "   !!!ERREUR dans la creation du profile utilisateur, ButtonContainer du Set profile screen:",
                error
              );
              Alert.alert(
                "Erreur dans la création du profile",
                "Le profile utilisateur n'a pas pu être créé"
              );
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
