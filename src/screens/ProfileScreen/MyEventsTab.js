import React from "react";
import { FlatList, Dimensions, ScrollView, Text, View } from "react-native";

import EventRow from "./EventRow";
import styles from "./styles";

export default function MyEventsTab(props) {
  const { width, height } = Dimensions.get("window");

  return (
    <FlatList
      data={props.events}
      keyExtractor={(item) => item.id}
      style={{
        flex: 1,
        backgroundColor: "white",
        width: width,
      }}
      ListEmptyComponent={
        <View
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
        </View>
      }
      renderItem={(item) => <EventRow event={item.item} />}
    />
  );
}
