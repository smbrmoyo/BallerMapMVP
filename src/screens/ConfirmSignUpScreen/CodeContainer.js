import React from "react";
import { Text, TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { hsize } from "../../utils/Dimensions";
import styles from "./styles";

export default function CodeContainer(props) {
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
        Code
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Verification Code"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.text,
            },
          ]}
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(text) => props.setCode(text)}
        />
      </View>
    </View>
  );
}
