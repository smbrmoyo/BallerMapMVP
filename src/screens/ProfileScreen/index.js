import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { hsize } from "../../utils/Dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";

import EventRow from "./EventRow";
import BottomSheetProfile from "./BottomSheetProfile";
import Loading from "./Loading";
import ProfileContainer from "./ProfileContainer";
import styles from "./styles";

//render function

const ProfileScreen = ({ navigation, route }) => {
  // Alert for logout
  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 100;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

  bsProf = useRef(null);
  fall = useRef(new Animated.Value(1)).current;
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const { signOut, user, yourEvents } = useAuth();
  const { profileDoc, status } = useProfile();
  const [myEvents, setMyEvents] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setMyEvents(profileDoc?.eventsCreated.items);
    setLoading(false);
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
          <Loading CARD_HEIGHT={CARD_HEIGHT} CARD_WIDTH={CARD_WIDTH} />
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
            />
            <FlatList
              data={myEvents}
              keyExtractor={(item) => item.id}
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
              renderItem={(item) => <EventRow event={item.item} />}
            />
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProfileScreen;
