import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import debounce from "lodash/debounce";
import { useTheme, useRoute } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

import { useAuth } from "../../navigation/Providers/AuthProvider";
import SearchBarFollowers from "./SearchBar";
import FollowRow from "./FollowRow";
import { hsize, wsize } from "../../utils/Dimensions";

const FollowingScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  const [isFollowing, setIsFollowing] = useState(isFollowing);
  const route = useRoute();
  const following = route.params?.following;

  useEffect(() => {
    setData(following);
  }, []);

  const searchFilter = async (text) => {
    if (text) {
      var newData = following.filter((item) => {
        var name = item.followed.username.toLowerCase();
        const filter = text.toLowerCase();
        return name.search(filter) !== -1;
      });
      setData(newData);
      setText(text);
    } else {
      setData(following);
      setText("");
    }
  };

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
  };

  /*const onChangeTextDebounced = debounce(onChangeText, 1000, {
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
            <Text style={styles.textHeader}>
              {/*firebase.auth().currentUser.email*/}
            </Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

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
              isFollowing={isFollowing}
              onFollowPress={onFollowPress}
              item={item}
              navigate={navigation.navigate}
              user={user}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FollowingScreen;
