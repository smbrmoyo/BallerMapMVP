import React from "react";
import { View, Text, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";
import { checkName } from "../AddScreen/helpers";

export default function NameContainer(props) {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Name</Text>
      </View>

      <TextInput
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
        placeholder="Give your run a name"
        placeholderTextColor="#CDCDCD"
        defaultValue={props.eventData.name}
        onEndEditing={(event) =>
          props.setEventData({
            ...props.eventData,
            name: event.nativeEvent.text,
          })
        }
      />
      {props.check ? (
        checkName(props.eventData.name) ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Your run must have a name.</Text>
          </Animatable.View>
        )
      ) : null}
    </View>
  );
}
