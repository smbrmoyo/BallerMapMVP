import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { View, Text, Dimensions, FlatList, RefreshControl } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ProfilePicture from "../../components/ProfilePictureUser";
import Bitmoji from "../../components/Bitmoji";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import styles from "./styles";
import NotifRow from "./NotifRow";
import { hsize, wsize } from "../../utils/Dimensions";

const ListContainer = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const { width, height } = Dimensions.get("window");
  const onRefresh = React.useCallback(() => {
    const wait = (timeout) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    setRefreshing(true);
    wait(1500).then(() => {
      setRefreshing(false);
      props.setNewData(true);
    });
  }, []);

  console.log("FlatList ActivityScreen has re-rendered");

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.textHeader,
              { marginVertical: hsize(5), marginLeft: wsize(10) },
            ]}
          >
            New
          </Text>
          <View
            style={{
              backgroundColor: "red",
              height: wsize(5),
              width: wsize(5),
              borderRadius: wsize(2.5),
              marginLeft: wsize(5),
            }}
          />
        </View>
        <FlatList
          data={props.myNotifs}
          keyExtractor={(item) => item.id}
          extraData={props.notifExtraData}
          style={{
            flex: 1,
            backgroundColor: "white",
            width: width,
          }}
          renderItem={({ item }) => <NotifRow notif={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
};

export default ListContainer;
