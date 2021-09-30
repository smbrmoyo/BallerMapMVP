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
import users from "../../assets/data/people";
import ProfilePicture from "../../components/ProfilePicture";
import { wsize, hsize } from "../../utils/Dimensions";
import debounce from "lodash/debounce";
import { useTheme } from "@react-navigation/native";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import LoadingScreen from "../LoadingScreen";
import {
  MaterialIcons,
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./styles";

function SearchBarFollowers(props) {
  return (
    <View style={styles.headerContainer}>
      <TextInput //autoFocus
        onChangeText={props.onChangeTextDebounced}
        value={props.text}
        placeholder="Search"
        placeholderTextColor={props.colors.text}
        style={[
          styles.inputBox,
          {
            color: props.colors.text,
            backgroundColor: props.colors.background,
            borderColor: props.colors.border,
            borderWidth: props.dark ? 1 : 0.5,
          },
        ]}
      />
    </View>
  );
}

function FollowRow(item) {
  const [isAdded, setIsAdded] = useState(true);
  const onAddPress = () => {
    setIsAdded(!isAdded);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.postHeaderFirst}
      /*onPress={() => {
        props.navigate("OtherProfile", {
          user: {
            id: item.key,
            //photo: item.photoURL,
            userName: item.name,
          },
        });
      }}*/
    >
      <View style={styles.postHeaderContainer}>
        <View
          style={{
            flexDirection: "row",
            //flex: 1,
            //paddingHorizontal: wsize(5),
            paddingVertical: hsize(10),
            justifyContent: "space-around",
          }}
        >
          <ProfilePicture size={50} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: wsize(15),
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "black",
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: added === true ? "#D8D8D8" : "#743cff",
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#E9E8E8",
            borderRadius: 50,
            //height: hsize(30),
            //width: "25%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsAdded(!isAdded)} // Should add to the list of participants
          >
            {isAdded == true ? (
              <Feather name="plus" size={30} color="black" />
            ) : (
              <Feather name="check" size={30} color="#743cff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const UserSearchScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { colors, dark } = useTheme();
  const [text, setText] = useState("");
  // const followers = [];
  const [data, setData] = useState(users); // users should come from uProfile

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
            bsProf.current.snapTo(0);
          }}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color="black"
            />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
          renderItem={(item) => <FollowRow item isAdded onAddPress />}
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
