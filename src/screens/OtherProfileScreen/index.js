import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Dimensions, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import Animated from "react-native-reanimated";
import {useRoute} from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import MyEventsTab from "./MyEventsTab";
import AttendingTab from "./AttendingTab";
import BottomSheetOther from "./BottomSheetOther";
import ProfileContainer from "./ProfileContainer";
import Loading from "./Loading";
import {hsize} from "../../utils/Dimensions";
import styles from "./styles";
import {createUserConnection, deleteUserConnection, getUprofileDoc,} from "../../aws-functions/userFunctions";
import {useProfile} from "../../navigation/Providers/ProfileProvider";
import {useAuth} from "../../navigation/Providers/AuthProvider";

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
  const [currentTab, setCurrentTab] = useState("myEvents");
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(true);
  const [count, setCount] = useState({
    followers: profileDoc?.followers.items.length,
    following: profileDoc?.following.items.length,
  });
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

    /**const subscribeToCreateUserConnection = API.graphql(
         graphqlOperation(onCreateUserConnection, { id: user + otherUserId })
         ).subscribe({
      next: ({ value }) => {
        let tempProfileDoc = [...profileDoc.following.items];
        tempProfileDoc.push(value.data.onCreateUserConnection);

        let tempOtherUser = [...otherUser.followers.items];
        tempOtherUser.push(value.data.onCreateUserConnection);

        setProfileDoc({
          ...profileDoc,
          following: { items: tempProfileDoc },
        });

        setOtherUser({
          ...otherUser,
          followers: { items: tempOtherUser },
        });
      },
      error: (error) => console.log(error),
    });

         const subscribeToDeleteUserConnection = API.graphql(
         graphqlOperation(onDeleteUserConnection, { id: user + otherUserId })
         ).subscribe({
      next: ({ value }) => {
        let tempProfileDoc = [...profileDoc.following.items];
        tempProfileDoc.splice(
          tempProfileDoc.indexOf(value.data.onCreateUserConnection),
          1
        );

        let tempOtherUser = [...profileDoc.following.items];
        tempOtherUser.splice(
          tempOtherUser.indexOf(value.data.onCreateUserConnection),
          1
        );

        setProfileDoc({
          ...profileDoc,
          following: { items: tempProfileDoc },
        });

        setOtherUser({
          ...otherUser,
          followers: { items: tempOtherUser },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });*/

    setFollowLoading(false);

    return () => {
      setLoading(true);
      setStatus("loading");
      // subscribeToCreateUserConnection.unsubscribe();
      // subscribeToDeleteUserConnection.unsubscribe();
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
    });
  }, [otherUser]);

  const onFollowPress = () => {
    let input = {
      follower: profileDoc?.id,
      followed: otherUser?.id,
    };
    !isFollowing
      ? createUserConnection(input)
          .then(() => setIsFollowing(!isFollowing))
          .catch((error) => console.log(JSON.stringify(error)))
      : deleteUserConnection(input)
          .then(() => setIsFollowing(!isFollowing))
          .catch((error) => console.log(JSON.stringify(error)));
  };

  const goToFollowing = () => {
    navigation.navigate("Following", {
      following: otherUser?.following.items,
    });
  };

  const goToFollowers = () => {
    navigation.navigate("Followers", {
      followers: otherUser?.followers.items,
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
                setCurrentTab={setCurrentTab}
                navigation={navigation}
              />

              <AttendingTab
                events={otherUser?.myEvents.items}
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
