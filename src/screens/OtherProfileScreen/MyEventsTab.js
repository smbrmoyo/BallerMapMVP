import React from "react";
import { FlatList, Dimensions, ScrollView, Text } from "react-native";

import EventRow from "../ProfileScreen/EventRow";

export default function MyEventsTab(props) {
  const { width, height } = Dimensions.get("window");

  return (
    <FlatList
      data={props.events}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <ScrollView
          style={{
            flex: 1,
            width: width,
          }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
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
