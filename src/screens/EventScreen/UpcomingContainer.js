import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  useCode,
  Value,
  set,
  eq,
  cond,
  not,
} from "react-native-reanimated";
//import firestore from "@react-native-firebase/firestore";
//import firebase from "@react-native-firebase/app";
//import auth from "@react-native-firebase/auth";
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

const UpcomingContainer = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <Text
          style={[
            styles.textHeader,
            { marginVertical: hsize(5), marginLeft: wsize(10) },
          ]}
        >
          Upcoming
        </Text>
        <FlatList
          data={props.myEvents}
          keyExtractor={(item) => item.id}
          style={{
            flex: 1,
            backgroundColor: "white",
            width: width,
            borderRadius: 10,
          }}
          renderItem={(item) => (
            <EventRow navigation={props.navigation} event={item.item} />
          )}
        />
      </View>
    </>
  );
};

export default UpcomingContainer;
