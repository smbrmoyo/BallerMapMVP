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
          image: (
            <Image
              style={styles.imageOne}
              source={require("../../../image0.jpeg")}
            />
          ),
          title: "Onboarding 1",
          subtitle: "FIRST TEXT",
        },
        {
          backgroundColor: "orange",
          image: (
            <Image
              style={styles.imageThree}
              source={require("../../assets/images/bitmoji-image.png")}
            />
          ),
          title: "Onboarding 2",
          subtitle: "SECOND TEXT",
        },
        {
          backgroundColor: "grey",
          image: (
            <Image
              style={styles.imageTwo}
              source={require("../../assets/images/bitmoji-image.png")}
            />
          ),
          title: "Onboarding 3",
          subtitle: "THIRD TEXT",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
