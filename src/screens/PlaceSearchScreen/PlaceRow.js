import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

export default function PlaceRow(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        props.navigate({
          name: "Add",
          params: {
            searchedPlace: props.item,
            index: props.indexOf(props.item),
          },
        })
      }
    >
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={25} color={"#743cff"} />
        </View>
        <View>
          <Text style={styles.locationText}>{props.item.name}</Text>
          <Text
            style={{
              color: "grey",
            }}
          >
            {props.item.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
