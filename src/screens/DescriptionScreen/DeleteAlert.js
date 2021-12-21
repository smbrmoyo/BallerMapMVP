import React from "react";
import { Alert } from "react-native";
import { deleteEvent } from "../../aws-functions/eventFunctions";

export default function DeleteAlert(event, navigation) {
  Alert.alert(
    "Are you sure you want to delete this event?",
    "Your friends won't be able to see it anymore",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          deleteEvent(event.id);
          navigation.navigate("Profile", { screen: "Profile" });
        },
        style: "destructive",
      },
    ]
  );
}
