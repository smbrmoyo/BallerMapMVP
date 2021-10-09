import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from "react-native";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { hsize } from "../../utils/Dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";

import BottomSheetProfile from "./BottomSheetProfile";
import Loading from "./Loading";
import ProfileContainer from "./ProfileContainer";
import MyEventsTab from "./MyEventsTab";
import styles from "./styles";

//render function

const ProfileScreen = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");
  const tabs = {
    events: "myEvents",
    attending: "attending",
  };
  const list = [{ id: "1" }, { id: "2" }];
  bsProf = useRef(null);
  fall = useRef(new Animated.Value(1)).current;
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true); // Should set to true and work on loading screen
  const _scrollView = useRef(null);
  const { signOut, user, yourEvents } = useAuth();
  const { profileDoc, status } = useProfile();
  const [myEvents, setMyEvents] = useState([]);
  const { events, attending } = tabs;
  const [currentTab, setCurrentTab] = useState(events);
  const isFocused = useIsFocused();

  useEffect(() => {
    profileDoc != undefined ? setLoading(false) : null;
    setMyEvents(profileDoc?.eventsCreated.items);
  }, [profileDoc]);

  useLayoutEffect(() => {
    navigation.setOptions({
      //title: "",
      height: hsize(80),
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("UserSearch")}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={23} color="black" />
          </View>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Profile</Text>
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

  // console.log(JSON.stringify(profileDoc?.following.items.length));
  // console.log(JSON.stringify(myEvents[0]));

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
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
        //translucent
        backgroundColor="white" /*transparent*/
        barStyle="dark-content"
      />

      <BottomSheetProfile profileDoc={profileDoc} />
      <TouchableWithoutFeedback onPress={() => bsProf.current.snapTo(1)}>
        {loading ? (
          <Loading />
        ) : (
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 2,
              height: "100%",
              width: "100%",
              opacity: Animated.add(0.05, Animated.multiply(fall, 1.0)),
            }}
          >
            <ProfileContainer
              profileDoc={profileDoc}
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
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
              ContentContainerStyle={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
              }}
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width}
              snapToAlignment="center"
              decelerationRate={"fast"}
            >
              <MyEventsTab myEvents={myEvents} />
              <MyEventsTab myEvents={myEvents} />
            </ScrollView>
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProfileScreen;
{
  /*
                  <MyEventsTab myEvents={myEvents} />
                */
}
