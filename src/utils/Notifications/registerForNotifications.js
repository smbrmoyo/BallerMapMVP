import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React from "react";
import { updatePushToken } from "../../aws-functions/userFunctions";

export async function registerForPushNotificationsAsync(user) {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    try {
      token = (
        await Notifications.getExpoPushTokenAsync({
          experienceId: "@brianmoyou/BallerMap",
        })
      ).data;
      console.log(token);
    } catch (error) {
      console.log("error on getting expoPushToken: ", error);
    }
  }
  let input = {
    id: user,
    expoPushToken: "ExponentPushToken[vzVWrGKf78eBc2ACnPYO1x]", //ExponentPushToken[vzVWrGKf78eBc2ACnPYO1x]
  };
  if (
    user != "brianmoyou@gmail" ||
    user != "brianmoyou@yahoo.com" ||
    user != "brianmoyou28@gmail.com"
  ) {
    await updatePushToken(input);
  }
  return token;
}
