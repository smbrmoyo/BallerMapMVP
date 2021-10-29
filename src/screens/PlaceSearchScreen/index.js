import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchBar } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import debounce from "lodash/debounce";

import LoadingScreen from "../LoadingScreen";
import styles from "./styles";
import people from "../../assets/data/people";
import places from "../../assets/data/placesJSON";
import PlaceRow from "./PlaceRow";
import SearchBarPlaces from "./SearchBarPlaces";
import { hsize, wsize } from "../../utils/Dimensions";
import { useMap } from "../../components/navigation/Providers/MapProvider";
import { getPlacesList } from "../../aws-functions/placeFunctions";

const PlaceSearchScreen = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { places } = useMap();
  const [data, setData] = useState(places);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    const wait = (timeout) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "white",
        //shadowColor: "black",
        //elevation: 5,
      },
      //headerTitleAlign: 'left',
      headerBackTitleVisible: true,
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Find A Location</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View style={{ flexDirection: "row", margin: hsize(5) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{ justifyContent: "center" }}
          >
            <Entypo name="chevron-thin-left" size={23} color="#743cff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const searchFilter = async (text) => {
    if (text) {
      var newData = places.filter((item) => {
        var name = item.name.toLowerCase();
        const filter = text.toLowerCase();
        return name.search(filter) !== -1;
      });
      setData(newData);
      setText(text);
    } else {
      setData(places);
      setText("");
    }
  };

  const updateQuery = (input) => {
    setHits(data.slice());
    setQuery(input);
  };

  /*const onChangeText = async (text) => {
    updateQuery();
  };*/
  const onChangeTextDebounced = debounce(updateQuery, 1000, {
    leading: true,
    trailing: true,
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        refreshing={loading}
        ListHeaderComponent={
          <SearchBarPlaces
            colors={colors}
            dark={dark}
            text={text}
            onChangeTextDebounced={(text) => searchFilter(text)}
          />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        extraData={query}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate({
                name: "Add",
                params: {
                  searchedPlace: item,
                  index: places.indexOf(item),
                },
              })
            }
          >
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={25} color={"#743cff"} />
              </View>
              <View>
                <Text style={styles.locationText}>{item.name}</Text>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaceSearchScreen;
