import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import styles from "./styles";
import EventRow from "../ProfileScreen/EventRow";
import { hsize, wsize } from "../../utils/Dimensions";

const CurrentContainer = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.textHeader,
              { marginVertical: hsize(5), marginLeft: wsize(10) },
            ]}
          >
            Current
          </Text>
          <View
            style={{
              backgroundColor: "red",
              height: wsize(5),
              width: wsize(5),
              borderRadius: wsize(2.5),
              marginLeft: wsize(5),
            }}
          />
        </View>
        <FlatList
          data={props.myEvents}
          keyExtractor={(item) => item.id}
          style={{
            flex: 1,
            backgroundColor: "white",
            width: width,
          }}
          renderItem={(item) => (
            <EventRow navigation={props.navigation} event={item.item} />
          )}
        />
      </View>
    </>
  );
};

export default CurrentContainer;
