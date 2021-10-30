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
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useQuery } from "react-query";
import { wsize, hsize } from "../../utils/Dimensions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

import MyEventsTab from "./MyEventsTab";
import AttendingTab from "./AttendingTab";
import BottomSheetOther from "./BottomSheetOther";
import ProfileContainer from "./ProfileContainer";
import Loading from "./Loading";
import styles from "./styles";
import {
  createUserConnection,
  followUser,
  getUprofileDoc,
} from "../../aws-functions/userFunctions";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";

//render function

const OtherProfileScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  bsOtherProf = useRef(null);
  fallOtherProf = useRef(new Animated.Value(1)).current;
  const route = useRoute();
  let otherUserId = route.params?.id;
  const { profileDoc } = useProfile();
  const [status, setStatus] = useState("loading");
  const [otherUser, setOtherUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const _scrollView = useRef(null);
  const [loading, setLoading] = useState(true); // Should be coming from provider
  const tabs = {
    events: "myEvents",
    attending: "attending",
  };
  const { events, attending } = tabs;
  const [currentTab, setCurrentTab] = useState(events);
  const [myEvents, setMyEvents] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    //userAPI.getUserInfo(user.uid).then((doc) => setUserExstraInfo(doc.data()));
  }, [isFocused]);

  useEffect(() => {
    getUprofileDoc(otherUserId).then((result) => {
      if (otherUser == null || otherUser == undefined) {
        setOtherUser(result);
      } else if (otherUser != null || otherUser != undefined) {
        setLoading(false);
      }
    });

    return () => {
      setLoading(true);
      setStatus("loading");
      otherUserId = null;
    };
  }, [otherUser]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      height: hsize(80),
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
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
  }, [otherUser]);

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

  const goToFollowing = () => {
    navigation.navigate("Following", {
      following: otherUser.following.items,
    });
  };

  const goToFollowers = () => {
    navigation.navigate("Followers", {
      followers: otherUser.followers.items,
    });
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.0)" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheetOther />
      <TouchableWithoutFeedback onPress={() => bsOtherProf.current.snapTo(1)}>
        {loading ? (
          <Loading />
        ) : (
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 2,
              height: "100%",
              width: "100%",
              opacity: Animated.add(
                0.05,
                Animated.multiply(fallOtherProf, 1.0)
              ),
            }}
          >
            <ProfileContainer
              isFollowing={isFollowing}
              otherUser={otherUser}
              onFollowPress={onFollowPress}
              goToFollowing={goToFollowing}
              goToFollowers={goToFollowers}
              navigate={navigation.navigate}
              events={events}
              attending={attending}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              _scrollView={_scrollView}
            />
            <ScrollView
              ref={_scrollView}
              horizontal
              pagingEnabled
              //scrollEnabled={false}
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
              ContentContainerStyle={{
                flex: 1,
              }}
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width}
              snapToAlignment="center"
              decelerationRate={"fast"}
            >
              <MyEventsTab
                events={events}
                attending={attending}
                setCurrentTab={setCurrentTab}
                myEvents={otherUser?.eventsCreated.items}
              />

              <AttendingTab
                events={events}
                attending={attending}
                setCurrentTab={setCurrentTab}
                myEvents={[]}
              />
            </ScrollView>
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default OtherProfileScreen;
