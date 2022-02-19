import React from "react";
import { Alert, View, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
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
        Code
      </Text>
      <View style={styles.action}>
        <Ionicons name="keypad-outline" size={24} color="#05375a" size={18} />
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
