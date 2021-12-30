import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import FollowRow from "./FollowRow";
import SearchBarFollowers from "./SearchBarFollowers";
import { hsize } from "../../utils/Dimensions";

const UserSearchScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  const { profileDoc } = useProfile();
  const [data, setData] = useState(profileDoc?.following.items); // users should come from uProfile
  const [participants, setParticipants] = useState(route.params?.participants);

  /**
   * Should try updating event by adding new participants to the list
   */

  useEffect(() => {
    setData(profileDoc?.following.items);
  }, []);

  const searchFilter = async (text) => {
    if (text) {
      var newData = users.filter((item) => {
        var name = item.name.toLowerCase();
        const filter = text.toLowerCase();
        return name.search(filter) !== -1;
      });
      setData(newData);
      setText(text);
    } else {
      setData(users);
      setText("");
    }
  };
  /*const onChangeTextDebounced = debounce(updateQuery, 1000, {
    leading: true,
    trailing: true,
  });*/

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
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
            <Text style={styles.textHeader}>Invite A Friend</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            participants.length > 0
              ? navigation.navigate({
                  name: "UserUpdate",
                  params: {
                    participants: participants,
                  },
                })
              : null;
          }}
        >
          <View style={styles.iconContainer}>
            <Text
              style={{
                color: participants.length > 0 ? "#743cff" : "grey",
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [participants]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          refreshing={loading}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <SearchBarFollowers
              colors={colors}
              dark={dark}
              text={text}
              onChangeTextDebounced={(text) => searchFilter(text)}
            />
          }
          renderItem={({ item }) => (
            <FollowRow
              item={item}
              participants={participants}
              setParticipants={setParticipants}
              navigation={navigation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserSearchScreen;
