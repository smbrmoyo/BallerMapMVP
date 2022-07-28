import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { hsize } from "../../utils/Dimensions";
import debounce from "lodash/debounce";
import { useTheme } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import SearchBarAttendance from "./SearchBarAttendance";
import AttendanceRow from "./AttendanceRow";

const AttendanceScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  const [isFollowing, setIsFollowing] = useState(isFollowing);

  const onChangeText = async (text) => {
    setText(text);
  };
  const onChangeTextDebounced = debounce(onChangeText, 1000, {
    leading: true,
    trailing: true,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.iconContainer}>
            <Entypo name="chevron-thin-left" size={23} color="black" />
          </View>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Participants</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (
      route.params?.participants == null ||
      route.params?.participants == undefined
    ) {
      setData([]);
    } else {
      setData(route.params?.participants);
    }

    setLoading(false);
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          refreshing={loading}
          keyExtractor={(item) => item.userProfile?.id}
          ListHeaderComponent={
            <SearchBarAttendance
              colors={colors}
              dark={dark}
              text={text}
              onChangeTextDebounced={onChangeTextDebounced}
            />
          }
          renderItem={({ item }) => (
            <AttendanceRow item={item} navigate={navigation.navigate} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default AttendanceScreen;
