import React from "react";
import { Alert, View, Text, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
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
        Password
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: props.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(text) => props.setPassword(text)}
        />
      </View>
    </View>
  );
}
