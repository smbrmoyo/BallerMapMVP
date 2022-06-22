import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

import { hsize } from "../../utils/Dimensions";
import styles from "./styles";

export default function ConfirmContainer(props) {
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: hsize(35),
          },
        ]}
      >
        Confirm Password
      </Text>
      <View style={styles.action}>
        <Feather name="lock" color="#05375a" size={20} />
        <TextInput
          placeholder="Confirm Your Password"
          placeholderTextColor="#666666"
          secureTextEntry={
            props.dataSignUp.confirm_secureTextEntry ? true : false
          }
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(userPassword) =>
            props.handleConfirmPasswordChange(userPassword)
          }
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.updateConfirmSecureTextEntry}
        >
          {props.dataSignUp.confirm_secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {props.dataSignUp.isValidConfirmPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Not matching password.</Text>
        </Animatable.View>
      )}
    </View>
  );
}
