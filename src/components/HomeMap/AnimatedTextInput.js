import React from "react";
import { TextInput, TouchableOpacity, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import { wsize, hsize } from "../../utils/Dimensions";

export default function AnimatedTextInput(props) {
  return (
    <Animated.View
      style={{
        position: "absolute",
        paddingLeft: wsize(10),
        flexDirection: "row",
        height: "6%",
        width: "90%",
        top: "-25%",
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
        color: props.colors.text,
        backgroundColor: "white",
        borderColor: props.colors.border,
        borderWidth: props.dark ? 1 : 0.5,
      }}
    >
      <TextInput //autoFocus
        //autoFocus
        //onChangeText={props.onChangeTextDebounced}
        //value={props.text}
        placeholder="Search"
        placeholderTextColor="#CDCDCD"
        style={{
          //padding: hsize(10),
          //backgroundColor: "#eee",
          //marginVertical: hsize(5),
          //marginRight: wsize(5),
          flex: 1,
        }}
      />
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
  );
}
