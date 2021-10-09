import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import * as Haptics from "expo-haptics";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import ProfilePicture from "../../components/ProfilePicture";
import {
  createUserDoc,
  createUserProfile,
  getAuthenticatedUser,
} from "../../aws-functions/userFunctions";
import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";
import Feather from "react-native-vector-icons/Feather";
import userConf from "../../aws-functions/userConf";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

export default function BioContainer(props) {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Bio</Text>
      </View>

      <TextInput
        style={{
          padding: hsize(10),
          backgroundColor: "#eee",
          marginVertical: hsize(5),
          borderRadius: hsize(5),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}
        placeholder="0/50"
        multiline
        placeholderTextColor="#CDCDCD"
        onEndEditing={(event) =>
          props.setUserProfile({
            ...props.userProfile,
            bio: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}
