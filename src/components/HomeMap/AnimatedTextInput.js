import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import debounce from "lodash/debounce";
import { Feather } from "@expo/vector-icons";

import LoadingScreen from "../../screens/LoadingScreen";
import { hsize, wsize } from "../../utils/Dimensions";
import { useMap } from "../../components/navigation/Providers/MapProvider";

export default function AnimatedTextInput(props) {
  const [text, setText] = useState("");
  const { places } = useMap();
  const [data, setData] = useState(places);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();

  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          paddingLeft: wsize(10),
          flexDirection: "row",
          height: "6%",
          width: "90%",
          top: "-18%",
          borderRadius: hsize(10),
          alignSelf: "center",
          transform: [
            {
              translateY: props.heightAnim,
            },
          ],
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          //color: props.colors.text,
          backgroundColor: "white",
          //borderColor: props.colors.border,
          //borderWidth: props.dark ? 1 : 0.5,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: 1,
            justifyContent: "center",
          }}
          onPress={() => props.navigation.navigate("MapSearch")}
        >
          <Text //autoFocus
            //autoFocus
            //onChangeText={props.onChangeTextDebounced}
            //value={props.text}
            style={{
              //padding: hsize(10),
              //backgroundColor: "#eee",
              //marginVertical: hsize(5),
              //marginRight: wsize(5),
              color: "#CDCDCD",
              fontSize: 16,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            marginRight: wsize(5),
          }}
          activeOpacity={0.7}
          onPress={props.undoAnimate}
        >
          <Feather name="x" size={20} color="grey" />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
