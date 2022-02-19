import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

export default function PasswordContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            color: props.colors.text,
            marginTop: 35,
          },
        ]}
      >
        Password
      </Text>
      <View style={styles.action}>
        <Feather name="lock" color={props.colors.text} size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
          secureTextEntry={props.dataLogin.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              color: props.colors.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(userPassword) =>
            props.handlePasswordChange(userPassword)
          }
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.updateSecureTextEntry}
        >
          {props.dataLogin.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>

      {props.dataLogin.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        </Animatable.View>
      )}
    </View>
  );
}
