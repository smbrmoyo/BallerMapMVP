import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import { Alert, View, Text, FlatList, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
//import * as firebase from "firebase";
//import firestore from "@react-native-firebase/firestore";
//import firebase from "@react-native-firebase/app";
//import auth from "@react-native-firebase/auth";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

export default function ChatScrollView(props) {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      contentContainerStyle={{
        paddingTop: 10,
      }}
      /*={() =>
        scrollView.current.scrollToEnd({
          animated: true,
        })
      }*/
      style={{
        height: "100%",
        backgroundColor: "red",
      }}
    >
      {props.messages.map(({ id, data }) =>
        data.email === props.user ? (
          <View key={id} style={styles.sender}>
            <Text style={styles.senderText}>{data.message}</Text>
          </View>
        ) : (
          <View key={id} style={styles.receiver}>
            <Text style={styles.senderText}>{data.message}</Text>
          </View>
        )
      )}
    </ScrollView>
  );
}