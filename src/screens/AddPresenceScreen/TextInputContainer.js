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
import { Button, Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Haptics from "expo-haptics";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import { wsize, hsize } from "../../utils/Dimensions";

export default function NameContainer(props) {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Name</Text>
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
        placeholder="Give your run a name"
        placeholderTextColor="#CDCDCD"
        onEndEditing={(event) =>
          props.setEventData({
            ...props.eventData,
            name: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}
