import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Alert,
  LogBox,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
//import * as firebase from "firebase";
//import firestore from "@react-native-firebase/firestore";
//import firebase from "@react-native-firebase/app";
//import auth from "@react-native-firebase/auth";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "../../components/ProfilePictureUser";
import styles from "./styles";
import { hsize } from "../../utils/Dimensions";
import ChatScrollView from "./ChatScrollView";
import Footer from "./Footer";

const ChatScreen = ({ data, size, navigation, route }) => {
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        //shadowColor: "black",
        //elevation: 5,
      },
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      //headerTitle: (),
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{ justifyContent: "center" }}
          >
            <View style={styles.iconContainer}>
              <Entypo name="chevron-thin-left" size={23} color="black" />
            </View>
          </TouchableOpacity>
          <ProfilePicture size={hsize(40)} />
          <Text style={styles.textHeader}>{route.params.chatName}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Alert.alert("BottomSheet Profile")}
            style={{ justifyContent: "center" }}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={23}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const [input, setInput] = useState("");
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    {
      id: "6",
      data: {
        message: "Pourquoi tu es laid?",
        email: "brianmoyou@gmail.com",
      },
    },
    {
      id: "7",
      data: {
        message: "Gars",
        email: "maximefx@gmail.com",
      },
    },
    {
      id: "8",
      data: {
        message: "Je n'y peux rien",
        email: "maximefx@gmail.com",
      },
    },
    {
      id: "9",
      data: {
        message: "Assia vraiment",
        email: "brianmoyou@gmail.com",
      },
    },
    {
      id: "10",
      data: {
        message: "Tout va s'arranger",
        email: "brianmoyou@gmail.com",
      },
    },
  ]);

  const sendMessage = () => {
    //Keyboard.dismiss();
    /*firebase
          .firestore()
          .collection("chats")
          .doc(route.params.id)
          .collection("messages")
          .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            email: firebase.auth().currentUser.email,
          });*/
    setInput("");
  };

  useEffect(() => {
    /*const unsubscribe = firebase
          .firestore()
          .collection("chats")
          .doc(route.params.id)
          .collection("message")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setMessages(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
        return unsubscribe;*/
  }, [route]);

  LogBox.ignoreAllLogs();

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{ backgroundColor: "white" }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <ChatScrollView user={user} messages={messages} />

          <Footer input={input} setInput={setInput} sendMessage={sendMessage} />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ChatScreen;
