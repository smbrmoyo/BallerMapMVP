import React, { useRef } from "react";
import { FlatList, LogBox, Text, View } from "react-native";
//import * as firebase from "firebase";
//import firestore from "@react-native-firebase/firestore";
//import firebase from "@react-native-firebase/app";
//import auth from "@react-native-firebase/auth";
import styles from "./styles";

export default function ChatScrollView(props) {
  const scrollView = useRef();
  LogBox.ignoreAllLogs();
  return (
    <FlatList
      ref={scrollView}
      data={props.messages}
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
        backgroundColor: "white",
        width: "100%",
      }}
      renderItem={({ item }, index) =>
        item.data.email === props.user ? (
          <View key={index} style={styles.sender}>
            <Text style={styles.senderText}>{item.data.message}</Text>
          </View>
        ) : (
          <View key={index} style={styles.receiver}>
            <Text style={styles.senderText}>{item.data.message}</Text>
          </View>
        )
      }
    />
  );
}
