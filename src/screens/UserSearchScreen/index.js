import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { useMap } from "../../navigation/Providers/MapProvider";
import FollowRow from "./FollowRow";
import SearchBarFollowers from "./SearchBarFollowers";
import { hsize } from "../../utils/Dimensions";

let idsToAdd = [];

const UserSearchScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const { users } = useMap();
  const [data, setData] = useState(users); // users should come from uProfile
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    setData(users);
  }, []);

  const addParticipant = (id) => {
    if (!idsToAdd.includes(id)) {
      setDone(true);
      idsToAdd.push(id);
    }
  };

  const deleteParticipant = (id) => {
    if (idsToAdd.includes(id)) {
      setDone(true);
      idsToAdd.splice(idsToAdd.indexOf(id), 1);
    }
  };

  const navigate = () => {
    navigation.navigate({
      name: "Add",
      params: {
        participants: idsToAdd,
      },
    });
  };

  const searchFilter = async (text) => {
    if (text) {
      let newData = users.filter((item) => {
        let name = item.name.toLowerCase();
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
            done ? navigate() : null;
          }}
        >
          <View style={styles.iconContainer}>
            <Text
              style={{
                color: done ? "#743cff" : "grey",
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [done]);

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
              addParticipant={addParticipant}
              deleteParticipant={deleteParticipant}
              isAdded
              onAddPress
              navigation={navigation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserSearchScreen;

/* <FollowRow
              isFollowing={isFollowing}
              onFollowPress={onFollowPress}
              item={item}
              navigate={navigation.navigate}
            /> */
