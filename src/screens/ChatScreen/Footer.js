import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import {
  Alert,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { hsize, wsize } from "../../utils/Dimensions";

export default function Footer(props) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Alert.alert("BottomSheet Sharing Options")}
      >
        <AntDesign name="plus" size={23} color="#743cff" />
      </TouchableOpacity>
      <TextInput
        value={props.input}
        onChangeText={(text) => props.setInput(text)}
        onSubmitEditing={props.sendMessage}
        multiline //textAlignVertical="top"
        style={styles.textInput}
        placeholder="Message..."
      />
      <TouchableOpacity activeOpacity={0.7} onPress={props.sendMessage}>
        <Ionicons name="send" size={23} color="#743cff" />
      </TouchableOpacity>
    </View>
  );
}
