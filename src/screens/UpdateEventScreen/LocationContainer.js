import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";
import { checkLocation } from "../AddScreen/helpers";

export default function LocationContainer(props) {
  return (
    <View style={styles.locationContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Address</Text>
      </View>
      <View style={styles.adressContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigate("PlaceSearchUpdate", {
              from: "Update",
              event: props.event,
            })
          }
        >
          <View
            style={{
              padding: hsize(10),
              backgroundColor: "#eee",
              marginVertical: hsize(5),
              borderRadius: hsize(5),
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
            {props.eventData.placeName == props.event?.place.name ? (
              <Text
                style={{
                  color: "black",
                }}
              >
                {props.event?.place.name}
              </Text>
            ) : (
              <Text
                style={{
                  color: "black",
                }}
              >
                {props.eventData.placeName}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {props.check ? (
        checkLocation(props.eventData.placeName) ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Your run must have an address.</Text>
          </Animatable.View>
        )
      ) : null}
    </View>
  );
}
