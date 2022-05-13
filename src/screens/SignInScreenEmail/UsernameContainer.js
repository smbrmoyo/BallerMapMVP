import React from "react";
import { View, Text, TextInput, StatusBar, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

export default function UsernameContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            color: props.colors.text,
          },
        ]}
      >
        Email
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={props.colors.text} size={20} />
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.colors.text,
            },
          ]}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => props.textInputChange(email)}
        />
        {props.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {props.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Your email is invalid.</Text>
        </Animatable.View>
      )}
    </View>
  );
}
