import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Haptics from "expo-haptics";

import { hsize, wsize } from "../../utils/Dimensions";
import { updateUserProfile } from "../../aws-functions/userFunctions";

export default function ButtonContainer(props) {
  const [disabled, setDisabled] = React.useState(false);

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
        onPress={() => props.navigation.goBack()}
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
              color: "red", // On cancel alert
            }}
          >
            Cancel
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          !disabled
            ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
                () => {
                  setDisabled(true);
                  props.setCheck(true);
                  updateUserProfile(props.userProfile).then((response) => {
                    if (response == undefined || response == null) {
                      null;
                    } else {
                      props.navigation.goBack();
                    }
                  });
                }
              )
            : null;
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
