import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {hsize, wsize} from "../../utils/Dimensions";
import ProfilePicture from "../../components/ProfilePicturePlace";
import styles from "./styles";

// An Event row in the FlatList

export default function EventRow(props) {
  const navigation = useNavigation();

  function pad2(string) {
    return `0${string}`.slice(-2);
  }

  const readableDate = (d) => {
    if (!d) return undefined;
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  };

  const readableTime = (d) => {
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  };

  let date = new Date(props.event.beginningTime);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() =>
        props.navigation.navigate("Description", { id: props.event.id })
      }
    >
      <View style={styles.postHeaderContainer}>
        <View
          style={{
            flexDirection: "row",
            //flex: 1,
            //paddingHorizontal: wsize(5),
            paddingVertical: hsize(10),
            //justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ProfilePicture size={styles.postHeaderFirst.height - hsize(20)} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: wsize(5),
              width: "60%",
              //backgroundColor: "black",
              //flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.event.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
                width: "90%",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.event.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#eee", //#eee
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 5,
            height: "100%",
            width: "25%",
            alignSelf: "center",
            alignItems: "center",
            //justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "black",
            }}
          >
            {readableTime(date)}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "black",
            }}
          >
            {readableDate(date)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
