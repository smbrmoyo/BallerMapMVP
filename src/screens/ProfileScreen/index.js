import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import Animated from "react-native-reanimated";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../navigation/Providers/AuthProvider";
import { useProfile } from "../../navigation/Providers/ProfileProvider";
import { hsize } from "../../utils/Dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SimpleLineIcons } from "@expo/vector-icons";

import BottomSheetProfile from "./BottomSheetProfile";
import Loading from "./Loading";
import ProfileContainer from "./ProfileContainer";
import MyEventsTab from "./MyEventsTab";
import AttendingTab from "./AttendingTab";
import styles from "./styles";

const ProfileScreen = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");
  const tabs = {
    events: "myEvents",
    attending: "attending",
  };
  bsProf = useRef(null);
  fall = useRef(new Animated.Value(1)).current;
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true); // Should set to true and work on loading screen
  const _scrollView = useRef(null);
  const { signOut, user, yourEvents } = useAuth();
  const { profileDoc, setProfileDoc } = useProfile();
  const [currentTab, setCurrentTab] = useState("myEvents");
  const isFocused = useIsFocused();

  useEffect(() => {
    profileDoc != undefined ? setLoading(false) : null;
  }, [profileDoc]);

  useLayoutEffect(() => {
    navigation.setOptions({
      //title: "",
      //height: hsize(80),
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("AllUsers")}
        >
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="user-follow" size={23} color="black" />
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

  const goToFollowing = () => {
    navigation.navigate("Following", {
      following: profileDoc?.following?.items,
    });
  };

  const goToFollowers = () => {
    navigation.navigate("Followers", {
      followers: profileDoc?.followers?.items,
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
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              _scrollView={_scrollView}
            />
            <ScrollView
              ref={_scrollView}
              horizontal
              scrollEnabled={false}
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width}
              snapToAlignment="center"
              decelerationRate={"fast"}
            >
              <MyEventsTab
                navigation={navigation}
                events={profileDoc?.eventsCreated?.items}
              />
              <AttendingTab
                navigation={navigation}
                events={[]} //profileDoc?.myEvents?.items
              />
            </ScrollView>
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProfileScreen;
