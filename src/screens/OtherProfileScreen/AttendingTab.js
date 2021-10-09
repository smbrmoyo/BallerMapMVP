import React from "react";
import { FlatList, Dimensions, ScrollView, Text } from "react-native";

import EventRow from "../ProfileScreen/EventRow";

export default function AttendingTab(props) {
  const { width, height } = Dimensions.get("window");
  //props.setCurrentTab(props.attending);

  return (
    <FlatList
      data={props.myEvents}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <ScrollView
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
        </ScrollView>
      }
      style={{
        flex: 1,
        backgroundColor: "white",
        width: width,
      }}
      renderItem={(item) => <EventRow event={item.item} />}
    />
  );
}
