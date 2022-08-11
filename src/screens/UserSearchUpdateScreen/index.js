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
import { useProfile } from "../../navigation/Providers/ProfileProvider";
import FollowRow from "./FollowRow";
import SearchBarFollowers from "./SearchBarFollowers";
import { hsize } from "../../utils/Dimensions";

const UserSearchUpdateScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  const { profileDoc } = useProfile();
  const [data, setData] = useState(profileDoc?.following.items);
  const [participants, setParticipants] = useState(route.params?.participants);
  const [participantsIDs, setParticipantsIDs] = useState(
    route.params?.participantsIDs
  );
  const [_participantsIDs, _setParticipantsIDs] = useState(
    route.params?.participantsIDs
  );
  let IDs = route.params?.participantsIDs;

  /**
   * Should try updating event by adding new participants to the list
   */

  useEffect(() => {
    setData(profileDoc?.following.items);
  }, []);

  const deleteParticipant = (id) => {
    if (participantsIDs.includes(id)) {
      IDs.splice(IDs.indexOf(id));
      setParticipantsIDs(IDs);
      console.log("public: ", participantsIDs);
      console.log("private: ", _participantsIDs);
    }
  };

  const addParticipant = (id) => {
    if (!participantsIDs.includes(id)) {
      IDs.push(id);
      setParticipantsIDs(IDs);
    }
    console.log("public: ", participantsIDs);
    console.log("private: ", _participantsIDs);
  };

  //console.log("public: ", participantsIDs);
  //console.log("private: ", _participantsIDs);

  const searchFilter = async (text) => {
    if (text) {
      let newData = profileDoc?.following.items?.filter((item) => {
        let name = item.name.toLowerCase();
        const filter = text.toLowerCase();
        return name.search(filter) !== -1;
      });
      setData(newData);
      setText(text);
    } else {
      setData(profileDoc?.following.items);
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
            participantsIDs !== _participantsIDs
              ? navigation.navigate({
                  name: "UpdateEvent",
                  params: {
                    participantsIDs: participantsIDs,
                  },
                })
              : null;
          }}
        >
          <View style={styles.iconContainer}>
            <Text
              style={{
                color:
                  participantsIDs !== _participantsIDs ? "#743cff" : "grey",
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [participantsIDs]);

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
              participantsIDs={participantsIDs}
              IDs={IDs}
              deleteParticipant={deleteParticipant}
              addParticipant={addParticipant}
              navigation={navigation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserSearchUpdateScreen;
