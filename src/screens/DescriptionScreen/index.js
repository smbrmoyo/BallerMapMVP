import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import ProfilePicture from "../../components/ProfilePicture";
import Bitmoji from "../../components/Bitmoji";
import styles from "./styles";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { hsize, wsize } from "../../utils/Dimensions";
import people from "../../assets/data/people";

const DescriptionScreen = ({ props, navigation, route }) => {
  function pad2(string) {
    return `0${string}`.slice(-2);
  }

  const readableDate = (d) => {
    if (!d) return undefined;
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  };

  const readableTime = (d) => {
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  };

  let event = route.params?.event;
  let beginningTime = new Date(event.beginningTime);
  let endingTime = new Date(event.endingTime);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <View style={styles.iconContainer}>
            <AntDesign name="adduser" size={30} color="black" />
          </View>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Infos</Text>
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
            <Ionicons name="settings-outline" size={23} color="black" />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
        <View style={styles.profileInitialContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("TryStory")}
          >
            <ProfilePicture size={70} />
          </TouchableOpacity>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>{event.name}</Text>
            <Text style={styles.profileType}>{event.description}</Text>
          </View>
        </View>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileInfo}>
            <SimpleLineIcons name="location-pin" size={20} color="#743cff" />
            <Text style={styles.textInfo}>placeLocation</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
            <EvilIcons name="link" size={22} color="black" />
            <Text style={styles.linkInfo}></Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
            <EvilIcons name="clock" size={20} color="black" />
            <Text style={styles.linkInfo}>
              {readableDate(beginningTime)} at {readableTime(beginningTime)}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoWrapper}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E9E8E8",
              borderRadius: hsize(20),
              height: hsize(40),
              width: wsize(150),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="share" size={23} color="black" />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Share</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#743cff",
                borderWidth: 1,
                borderColor: "#E9E8E8",
                borderRadius: hsize(20),
                height: hsize(40),
                width: wsize(150),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="bookmark-o" size={23} color="white" />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: 10,
                }}
              >
                Confirm
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: wsize(20),
            marginVertical: hsize(15),
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginBottom: hsize(20),
            }}
          >
            Who's coming?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
            style={{
              //flexDirection: "row",
              backgroundColor: "white",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 5,
              shadowOpacity: 0.4,
              elevation: 2.5,
              borderRadius: 10,
              alignItems: "center",
              //justifyContent: "center",
            }}
          >
            <FlatList
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              data={people} // Should be Attendants
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              numColumns={6}
              renderItem={(item) => (
                <View style={{ margin: 5 }}>
                  <ProfilePicture size={hsize(50)} />
                </View>
              )}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DescriptionScreen;
