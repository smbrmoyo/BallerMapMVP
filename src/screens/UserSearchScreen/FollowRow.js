import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { hsize, wsize } from "../../utils/Dimensions";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function FollowRow(props) {
  const [isAdded, setIsAdded] = useState(false);
  const onAddPress = () => {
    setIsAdded(!isAdded);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      /*onPress={() => {
                                navigation.navigate("Profile", {
                                  screen: "OtherProfile",
                                  params: { id: item.id },
                                });
                              }}*/
    >
      <View style={styles.postHeaderContainer}>
        <View
          style={{
            flexDirection: "row",
            //flex: 1,
            //paddingHorizontal: wsize(5),
            paddingVertical: hsize(10),
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ProfilePicture uri={props.item.profilePicture} size={50} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: wsize(15),
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              {props.item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              {props.item.username}
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: "red",
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: hsize(25),
            height: hsize(50),
            width: hsize(50),
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              !isAdded
                ? props.addParticipant(props.item?.id)
                : props.deleteParticipant(props.item?.id);
              onAddPress();
            }}
          >
            {isAdded ? (
              <Feather name="check" size={30} color="#743cff" />
            ) : (
              <Feather name="plus" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
