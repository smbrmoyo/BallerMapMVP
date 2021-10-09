import React from "react";
import { FlatList, Dimensions, ScrollView, Text } from "react-native";

import EventRow from "../ProfileScreen/EventRow";

export default function MyEventsTab(props) {
  const { width, height } = Dimensions.get("window");
  //props.setCurrentTab(props.events);

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
