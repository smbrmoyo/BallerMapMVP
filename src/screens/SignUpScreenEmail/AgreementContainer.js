import React, { useContext, useState, useEffect } from "react";
import { Alert, View, Text, Button, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import { hsize, wsize } from "../../utils/Dimensions";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useTheme } from "react-native-paper";
import styles from "./styles";

export default function AgreementContainer() {
  return (
    <View style={styles.textPrivate}>
      <Text style={styles.color_textPrivate}>
        By signing up you agree to our
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Linking.openURL("http://ballermap.com/terms-of-use/")}
      >
        <Text
          style={[
            styles.color_textPrivate,
            {
              fontWeight: "bold",
            },
          ]}
        >
          {" "}
          Terms of use
        </Text>
      </TouchableOpacity>
      <Text style={styles.color_textPrivate}> and</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Linking.openURL("http://ballermap.com/privacy-policy/")}
      >
        <Text
          style={[
            styles.color_textPrivate,
            {
              fontWeight: "bold",
            },
          ]}
        >
          {" "}
          Privacy policy
        </Text>
      </TouchableOpacity>
    </View>
  );
}
