import React, {
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import ProfilePicture from "../../components/ProfilePicture";
import FollowButton from "../../components/FollowButton";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { wsize, hsize } from "../../utils/Dimensions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import people from "../../assets/data/people";
import UserModal from "../ProfileScreen/UserModal";
import {
  createUserConnection,
  followUser,
} from "../../aws-functions/userFunctions";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

//create a array of images
const imgData = [
  { id: "1", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "2", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "3", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "4", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "5", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "6", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "7", imgSource: require("../../assets/images/bitmoji-image.png") },
  { id: "8", imgSource: require("../../assets/images/bitmoji-image.png") },
];
//create the center point of imgData
const centerImgData = Math.floor(imgData.length / 2);

function TabContainer(props) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity>
        <Feather name="list" size={23} color="black" />
      </TouchableOpacity>
    </View>
  );
}

//render function
const OtherProfileScreen = ({ navigation }) => {
  bsOtherProf = useRef(null);
  fallOtherProf = useRef(new Animated.Value(1)).current;
  //const authContext = useContext(AuthContext);
  const { profileDoc, status } = useProfile();
  const [isFollowing, setIsFollowing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true); // Should be coming from provider
  // const { user, logout } = useContext(AuthContext);
  //const { bookmarks, items, looks } = tabs;
  const [userExtraInfo, setUserExstraInfo] = useState(null);
  //const [currentTab, setCurrentTab] = useState(looks);
  const isFocused = useIsFocused();
  const route = useRoute();
  useEffect(() => {
    //userAPI.getUserInfo(user.uid).then((doc) => setUserExstraInfo(doc.data()));
  }, [isFocused]);

  const otherUser = route.params.user;

  function TabContainer(props) {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Feather name="list" size={23} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      height: hsize(80),
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
            <Text style={styles.textHeader}>{otherUser?.name}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            bsOtherProf.current.snapTo(0);
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
  }, []);

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.panelButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <AntDesign name="edit" size={30} color="black" />
          <Text style={styles.panelButtonTitle}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Ionicons name="settings-outline" size={23} color="black" />
          <Text style={styles.panelButtonTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.panelButton}
          onPress={() => bsOtherProf.current.snapTo(1)}
        >
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>COVID-19 Information</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  console.log(profileDoc?.following.items.followed);

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
    let input = {
      follower: profileDoc.id,
      followed: otherUser.id,
    };
    followUser(input)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const goToFollowing = (user) => {
    navigation.navigate("Following", {
      user: {
        id: user.uid,
      },
    });
  };

  const goToFollowers = (user) => {
    navigation.navigate("Followers", {
      user: {
        id: user.uid,
      },
    });
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheet
        ref={bsOtherProf}
        snapPoints={["60%", 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fallOtherProf}
        enabledGestureInteraction={true}
        enabledHeaderGestureInteraction={true}
        enabledContentGestureInteraction={true}
        enabledContentTapInteraction={false}
        overdragResistanceFactor={100}
      />
      <TouchableWithoutFeedback onPress={() => bsOtherProf.current.snapTo(1)}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 2,
            height: "100%",
            width: "100%",
            opacity: Animated.add(0.05, Animated.multiply(fallOtherProf, 1.0)),
          }}
        >
          <View style={styles.container}>
            <View style={styles.profileInitialContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Story")}
              >
                <ProfilePicture size={70} />
              </TouchableOpacity>
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>{otherUser?.username}</Text>
                <Text style={styles.profileType}>userExtraInfo.status</Text>
              </View>
            </View>
            <View style={styles.profileInfoContainer}>
              <View style={styles.profileInfo}>
                <SimpleLineIcons
                  name="location-pin"
                  size={20}
                  color="#743cff"
                />
                <Text style={styles.textInfo}>
                  {/*userExtraInfo.city*/}
                  Paris, Rue du con
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
                <EvilIcons name="link" size={20} color="black" />
                <Text style={styles.linkInfo}>userExtraInfo.link</Text>
              </TouchableOpacity>

              <View style={styles.profileInfo}>
                <Text style={styles.textInfo}>
                  Followed by michel_n, serg,dre and 91 others
                </Text>
              </View>
              <View style={styles.userInfoWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={goToFollowers}>
                  <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>1000</Text>
                    <Text style={styles.userInfoSubTitle}>Followers</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={goToFollowing}>
                  <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>100</Text>
                    <Text style={styles.userInfoSubTitle}>Following</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.userInfoWrapper}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#E9E8E8",
                    borderRadius: 5,
                    height: 30,
                    width: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 20 }}>Message</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={onFollowPress}>
                  <View
                    style={{
                      backgroundColor: isFollowing ? "white" : "#743cff",
                      borderWidth: 1,
                      borderColor: "#E9E8E8",
                      borderRadius: 5,
                      height: 30,
                      width: 100,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: isFollowing ? "black" : "white",
                      }}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TabContainer />
          </View>
          <FlatList
            data={people}
            keyExtractor={(item) => item.id}
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  shadowColor: "#000000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 5,
                  shadowOpacity: 0.3,
                  elevation: 2.5,
                  borderRadius: 10,
                  height: hsize(80),
                  width: "95%",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: hsize(10),
                }}
                onPress={() => navigation.navigate("Attendance")}
              >
                <View>
                  <Text></Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    height: "55%",
    //paddingTop: hsize(44),
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'rgba(0,0,0,0.05)',
    //marginBottom: 15,
    marginHorizontal: 10,
  },
  profileInitialContainer: {
    flexDirection: "row",
    paddingHorizontal: wsize(10),
    //paddingVertical: hsize(5),
  },
  profilePhoto: {
    width: wsize(80),
    height: wsize(80),
    borderRadius: wsize(40),
  },
  profileNameContainer: {
    marginLeft: wsize(22),
    justifyContent: "center",
    alignContent: "center",
  },
  profileName: {
    fontSize: wsize(24),
    fontWeight: "bold",
    color: "#262626",
  },
  profileType: {
    fontSize: wsize(14),
  },
  profileInfoContainer: {
    paddingHorizontal: wsize(10),
    paddingTop: hsize(10),
    marginBottom: hsize(2),
    alignSelf: "center",
    width: "100%",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wsize(5),
    paddingBottom: wsize(5),
  },
  textInfo: {
    fontSize: wsize(14),
    marginHorizontal: wsize(2),
  },
  linkInfo: {
    fontSize: wsize(14),
    color: "#003569",
  },
  followersContainer: {
    marginTop: hsize(7),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  followersContainerLeft: {
    marginTop: hsize(7),
    flexDirection: "row",
  },
  followersContainerRight: {
    marginTop: hsize(7),
    flexDirection: "row",
  },
  followers: {
    flexDirection: "row",
    marginRight: wsize(19),
  },
  followersNumbers: {
    fontSize: wsize(12),
    fontWeight: "bold",
    marginRight: wsize(3),
  },
  followersText: {
    fontSize: wsize(12),
    marginTop: hsize(3),
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    //width: "100%",
    marginVertical: hsize(8),
  },
  userInfoItem: {
    justifyContent: "center",
    alignItems: "center",
    //borderRightColor: '##E7E7E7',
    //borderRightWidth: 0.5,
  },
  userInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  followersLittleButton: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    paddingHorizontal: wsize(10),
    marginLeft: wsize(4),
  },
  lbuttonText: {
    color: "#0148FF",
    fontSize: wsize(14),
  },
  tabContainer: {
    borderWidth: 1,
    height: hsize(50),
    alignItems: "center",
    borderColor: "#DADBDA",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default OtherProfileScreen;
