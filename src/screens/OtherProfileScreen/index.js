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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { API, graphqlOperation } from "aws-amplify";

import MyEventsTab from "./MyEventsTab";
import AttendingTab from "./AttendingTab";
import BottomSheetOther from "./BottomSheetOther";
import ProfileContainer from "./ProfileContainer";
import Loading from "./Loading";
import { wsize, hsize } from "../../utils/Dimensions";
import styles from "./styles";
import {
  createUserConnection,
  followUser,
  getUprofileDoc,
  deleteUserConnection,
} from "../../aws-functions/userFunctions";
import {
  onCreateUserConnection,
  onDeleteUserConnection,
} from "../../graphql/subscriptions";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";

//render function

const OtherProfileScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  bsOtherProf = useRef(null);
  fallOtherProf = useRef(new Animated.Value(1)).current;
  const route = useRoute();
  let otherUserId = route.params?.id;
  const { profileDoc, setProfileDoc } = useProfile();
  const { user } = useAuth();
  const [status, setStatus] = useState("loading");
  const [otherUser, setOtherUser] = useState(null);
  const _scrollView = useRef(null);
  const [loading, setLoading] = useState(true); // Should be coming from provider
  const tabs = {
    events: "myEvents",
    attending: "attending",
  };
  const { events, attending } = tabs;
  const [currentTab, setCurrentTab] = useState(events);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(true);
  const isFocused = useIsFocused();

  /*useEffect(() => {
    //userAPI.getUserInfo(user.uid).then((doc) => setUserExstraInfo(doc.data()));
  }, [isFocused]);*/

  useEffect(() => {
    for (let i = 0; i < profileDoc?.following.items.length; i++) {
      if (profileDoc?.following.items[i].followedID == otherUser?.id) {
        setIsFollowing(true);
        break;
      }
    }

    getUprofileDoc(otherUserId).then((result) => {
      if (otherUser == null || otherUser == undefined) {
        setOtherUser(result);
      } else if (otherUser != null || otherUser != undefined) {
        setLoading(false);
      }
    });

    const subscribeToCreateUserConnection = API.graphql(
      graphqlOperation(onCreateUserConnection, { id: user + otherUserId })
    ).subscribe({
      next: ({ value }) => {
        let temp;
        temp = [...profileDoc.following.items];
        temp.push(value.data.onCreateUserConnection);

        setProfileDoc({
          ...profileDoc,
          following: { items: temp },
        });
      },
      error: (error) => console.log(error),
    });

    const subscribeToDeleteUserConnection = API.graphql(
      graphqlOperation(onDeleteUserConnection, { id: user + otherUserId })
    ).subscribe({
      next: ({ value }) => {
        let temp;
        temp = [...profileDoc.following.items];
        temp.splice(temp.indexOf(value.data.onCreateUserConnection), 1);

        setProfileDoc({
          ...profileDoc,
          following: { items: temp },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });

    setFollowLoading(false);

    return () => {
      setLoading(true);
      setStatus("loading");
      subscribeToCreateUserConnection.unsubscribe();
      subscribeToDeleteUserConnection.unsubscribe();
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
    let input = {
      follower: profileDoc.id,
      followed: otherUser.id,
    };
    !isFollowing
      ? createUserConnection(input)
          .then(() => setIsFollowing(!isFollowing))
          .catch((error) =>
            console.log("   Error onPress follow " + JSON.stringify(error))
          )
      : deleteUserConnection(input)
          .then(() => setIsFollowing(!isFollowing))
          .catch((error) =>
            console.log("   Error onPress unfollow " + JSON.stringify(error))
          );
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
              followLoading={followLoading}
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
                events={otherUser?.eventsCreated.items}
                attending={attending}
                setCurrentTab={setCurrentTab}
                navigation={navigation}
              />

              <AttendingTab
                events={otherUser?.myEvents.items}
                attending={attending}
                setCurrentTab={setCurrentTab}
                navigation={navigation}
              />
            </ScrollView>
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default OtherProfileScreen;
