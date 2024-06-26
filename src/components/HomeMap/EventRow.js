import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { wsize, hsize } from "../../utils/Dimensions";
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

  let date = new Date(props.event.item.beginningTime);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      onPress={() =>
        /*navigation.navigate("Profile", {
          screen: "Description",
          params: { event: event },
        })*/
        props.navigation.navigate("Description", { event: props.event })
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
              marginLeft: wsize(15),
              width: "60%",
              //flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
              ellipsizeMode="tail"
            >
              {props.event.item.name}
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
              {props.event.item.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#eee",
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 5,
            height: "100%",
            width: "25%",
            alignSelf: "center",
            alignItems: "center",
            //justifyContent: "center",
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
