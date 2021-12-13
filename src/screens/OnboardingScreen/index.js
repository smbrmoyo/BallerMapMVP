import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnboardingScreen = ({ navigation }) => {
  const Skip = ({ ...props }) => (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <Text style={styles.button}> Skip </Text>
    </TouchableOpacity>
  );
  const Next = ({ ...props }) => (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <Text style={styles.button}> Next </Text>
    </TouchableOpacity>
  );
  const Done = ({ ...props }) => (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <Text style={styles.button}> Done </Text>
    </TouchableOpacity>
  );

  if (AsyncStorage.getItem("alreadyLaunched")) {
    console.log("going to SetProfi");
  } else {
    console.log("going to Home");
  }
  return (
    <Onboarding
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onSkip={() => navigation.replace("SignInEmail")}
      onDone={() => navigation.navigate("SignInEmail")}
      pages={[
        {
          backgroundColor: "#fff",

          title: "Welcome to BallerMap",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
