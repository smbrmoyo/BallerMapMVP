import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DataStore } from "aws-amplify";

import { wsize, hsize } from "../../utils/Dimensions";
import { createEvent } from "../../aws-functions/eventFunctions";
import { Event } from "../../models";

export default function ButtonContainer(props) {
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
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(
            async () => {
              createEvent(props.eventData).then((response) => {
                props.navigation.navigate({
                  name: "Map",
                  params: {
                    createdEvent: props.params.searchedPlace,
                    index: props.params.index,
                  },
                });
              });

              /*try {
                const events = await DataStore.query(Event);
                console.log(
                  "Posts retrieved successfully!",
                  JSON.stringify(events, null, 2)
                );
              } catch (error) {
                console.log("Error retrieving posts", error);
              }*/

              /*try {
                await DataStore.save(
                  new Event({
                    name: props.eventData.name,
                    placeID: props.eventData.placeID,
                    creatorID: props.eventData.creatorID,
                    creator: props.eventData.creatorID,
                    beginningTime: props.eventData.beginningTime.toISOString(),
                    endingTime: props.eventData.endingTime.toISOString(),
                    tags: props.eventData.tags,
                    description: props.eventData.description,
                    privacy: props.eventData.privacy,
                    _version: 0,
                    _deleted: false,
                    _lastChangedAt: props.eventData._lastChangedAt,
                  })
                );
                console.log("Event saved successfully!");
              } catch (error) {
                console.log("Error saving event", error);
              }*/
            }
          );
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
