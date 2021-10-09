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

export default function PictureContainer() {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7} // onPress={() => bsEditProf.current.snapTo(0)}
      >
        <ProfilePicture
          uri={require("../../assets/images/default_profile_picture.png")}
          size={80}
        />
      </TouchableOpacity>
    </View>
  );
}
