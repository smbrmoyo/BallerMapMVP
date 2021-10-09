import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import { hsize, wsize } from "../../utils/Dimensions";
import people from "../../assets/data/people";

export default function ComingContainer() {
  return (
    <View
      style={{
        paddingHorizontal: wsize(20),
        marginVertical: hsize(15),
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
          marginBottom: hsize(20),
        }}
      >
        Who's coming?
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={{
          //flexDirection: "row",
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 5,
          shadowOpacity: 0.4,
          elevation: 2.5,
          borderRadius: 10,
          alignItems: "center", //justifyContent: "center",
        }}
      >
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          data={people} // Should be Attendants
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          numColumns={6}
          renderItem={(item) => (
            <View
              style={{
                margin: 5,
              }}
            >
              <ProfilePicture size={hsize(50)} />
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
}
