import React from "react";
import { FlatList, Dimensions, ScrollView, Text, View } from "react-native";

import EventRow from "../ProfileScreen/EventRow";

export default function AttendingTab(props) {
  const { width, height } = Dimensions.get("window");

  return props.events.length == 0 ? (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: width,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        Nothing to see here yet
      </Text>
    </View>
  ) : (
    <FlatList
      data={props.events}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            width: width,
          }}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text>Nothing to see here yet</Text>
        </View>
      }
      style={{
        flex: 1,
        backgroundColor: "white",
        width: width,
      }}
      renderItem={(item) => (
        <EventRow navigation={props.navigation} event={item.item} />
      )}
    />
  );
}
