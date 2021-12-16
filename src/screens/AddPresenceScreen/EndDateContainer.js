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
import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Haptics from "expo-haptics";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";

export default function EndDateContainer(props) {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>End</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.setVisibleEnd(true)}
      >
        <View style={styles.textInput}>
          <Text
            style={{
              color: props.colorEnd,
              fontSize: 16,
            }}
          >
            {props.readableDate(props.endingTime)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
