import React from "react";
import { FlatList, Dimensions } from "react-native";

import EventRow from "./EventRow";
import styles from "./styles";

export default function MyEventsTab(props) {
  const { width, height } = Dimensions.get("window");

  return (
    <FlatList
      data={props.myEvents}
      keyExtractor={(item) => item.id}
      style={{
        flex: 1,
        backgroundColor: "white",
        width: width,
      }}
      renderItem={(item) => <EventRow event={item.item} />}
    />
  );
}
