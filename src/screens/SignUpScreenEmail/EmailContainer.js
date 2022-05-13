import React from "react";
import { Alert, View, Text, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { hsize, wsize } from "../../utils/Dimensions";
import styles from "./styles";

export default function EmailContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: hsize(15),
          },
        ]}
      >
        Email
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(userEmail) => props.emailInputChange(userEmail)}
        />
        {props.check_emailInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {props.isValidEmail ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Your email is invalid.</Text>
        </Animatable.View>
      )}
    </View>
  );
}
