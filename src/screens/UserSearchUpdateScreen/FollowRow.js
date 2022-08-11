import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import ProfilePicture from "../../components/ProfilePictureUser";
import { hsize, wsize } from "../../utils/Dimensions";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function FollowRow(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [loading, setLoading] = useState(true);
  const onAddPress = () => {
    setIsAdded(!isAdded);
  };

  useEffect(() => {
    for (let i = 0; i < props.participants.items.length; i++) {
      if (
        props.participants.items[i].userProfile.id === props.item.followed.id &&
        props.participantsIDs.includes(
          props.participants.items[i].userProfile.id
        )
      ) {
        setIsAdded(true);
      }
    }
    setLoading(false);
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.postHeaderFirst}>
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
          <ProfilePicture
            uri={props.item?.followed?.profilePicture}
            size={50}
          />
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
              {props.item?.followed?.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              {props.item?.followed?.username}
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
                ? (setIsAdded(!isAdded),
                  props.addParticipant(props.item?.followed?.id))
                : (setIsAdded(!isAdded),
                  props.deleteParticipant(props.item?.followed?.id));
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#743cff" />
            ) : isAdded ? (
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
