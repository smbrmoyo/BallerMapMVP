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
import { useAuth } from "../../components/navigation/Providers/AuthProvider";
import { useProfile } from "../../components/navigation/Providers/ProfileProvider";
import { hsize } from "../../utils/Dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SimpleLineIcons } from "@expo/vector-icons";

import BottomSheetProfile from "./BottomSheetProfile";
import Loading from "./Loading";
import ProfileContainer from "./ProfileContainer";
import MyEventsTab from "./MyEventsTab";
import AttendingTab from "./AttendingTab";
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateUserConnection,
  onDeleteUserConnection,
  onUpdateUprofile,
  onCreateUserEventConnection,
  onDeleteUserEventConnection,
} from "../../graphql/subscriptions";
import { getUprofileDoc } from "../../aws-functions/userFunctions";

let followers = undefined;
let updatedProfile = undefined;
let newEvents = undefined;

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
  const { profileDoc, setProfileDoc } = useProfile();
  const [myEvents, setMyEvents] = useState([]);
  const { events, attending } = tabs;
  const [currentTab, setCurrentTab] = useState(events);
  const isFocused = useIsFocused();

  useEffect(() => {
    profileDoc != undefined ? setLoading(false) : null;
  }, [profileDoc]);

  const onPageRendered = async () => {
    //await subscribeToRemoveFollower(profileDoc, loggedUser);
    //await subscribeToAddFollower(profileDoc, loggedUser);
    //await subscribeToUpdateProfile(profileDoc, user);
    //await subscribeToDeleteEvent(profileDoc, loggedUser);
    //await subscribeToAddEvent(profileDoc, loggedUser);
  };

  const subscribeToRemoveFollower = async (profileDocument, loggedUser) => {
    await API.graphql(graphqlOperation(onDeleteUserConnection)).subscribe({
      next: async ({ value }) => {
        try {
          const profileId =
            profileDocument !== null ? profileDocument.id : user;
          if (value.data.onDeleteUserConnection.followedID == profileId) {
            console.log("unfollowed");
            await updateFollowers(profileId);
          } else {
            console.log("user not related to this follow");
          }
        } catch (e) {
          console.warn(e);
        }
      },
      error: (error) => console.log(error),
    });
  };

  const subscribeToAddFollower = async (profileDocument, loggedUser) => {
    await API.graphql(
      graphqlOperation(onCreateUserConnection, { id: user })
    ).subscribe({
      next: async ({ value }) => {
        try {
          const profileId =
            profileDocument !== null ? profileDocument.id : user;
          if (value.data.onCreateUserConnection.followedID == profileId) {
            console.log("followed");
            //await updateFollowers(profileId);
          } else {
            console.log("user not related to this follow");
          }
        } catch (e) {
          console.warn(e);
        }
      },
      error: (error) => console.log(error, " here"),
    });
  };

  const updateFollowers = async (userId) => {
    let response = await getUprofileDoc(userId);
    followers = response.followers.items;
  };

  const subscribeToDeleteEvent = async (profileDocument, loggedUser) => {
    await API.graphql(graphqlOperation(onDeleteUserEventConnection)).subscribe({
      next: async ({ value }) => {
        try {
          const profileId =
            profileDocument !== null ? profileDocument.id : user;
          if (value.data.onDeleteUserEventConnection.profileID == profileId) {
            console.log("removeEvent");
            await updateEvents(profileId);
          } else {
            console.log("event not related to this user");
          }
        } catch (e) {
          console.warn(e);
        }
      },
      error: (error) => console.log(error, " here"),
    });
  };

  const subscribeToAddEvent = async (profileDocument, loggedUser) => {
    await API.graphql(graphqlOperation(onCreateUserEventConnection)).subscribe({
      next: async ({ value }) => {
        try {
          const profileId =
            profileDocument !== null ? profileDocument.id : user;
          if (value.data.onCreateUserEventConnection.profileID == profileId) {
            console.log("subscription to createEvent");
            await updateEvents(profileId);
          } else {
            console.log("subscription to createEvent failed");
          }
        } catch (e) {
          console.warn(e);
        }
      },
      error: (error) => console.log(error, " here"),
    });
  };

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

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
  };

  const goToFollowing = () => {
    navigation.navigate("Following", {
      following: profileDoc?.following?.items,
    });
  };

  const goToFollowers = () => {
    navigation.navigate("Followers", {
      followers:
        followers != undefined ? followers : profileDoc.followers.items,
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
              followers={followers}
              goToFollowing={goToFollowing}
              goToFollowers={goToFollowers}
              navigate={navigation.navigate}
              events={profileDoc?.eventsCreated?.items}
              attending={profileDoc?.eventsCreated?.items}
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

const subscribeToRemoveFollower = async (profileDocument, loggedUser) => {
  await API.graphql(graphqlOperation(onDeleteUserConnection)).subscribe({
    next: async ({ value }) => {
      try {
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (value.data.onDeleteUserConnection.followedID == profileId) {
          console.log("unfollowed");
          await updateFollowers(profileId);
        } else {
          console.log("user not related to this follow");
        }
      } catch (e) {
        console.warn(e);
      }
    },
    error: (error) => console.log(error),
  });
};

const subscribeToAddFollower = async (profileDocument, loggedUser) => {
  await API.graphql(graphqlOperation(onCreateUserConnection)).subscribe({
    next: async ({ value }) => {
      try {
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (value.data.onCreateUserConnection.followedID == profileId) {
          console.log("followed");
          await updateFollowers(profileId);
        } else {
          console.log("user not related to this follow");
        }
      } catch (e) {
        console.warn(e);
      }
    },
    error: (error) => console.log(error, " here"),
  });
};

const updateFollowers = async (userId) => {
  let response = await getUprofileDoc(userId);
  followers = response.followers.items;
};

const subscribeToUpdateProfile = async (profileDocument, loggedUser) => {
  await API.graphql(graphqlOperation(onUpdateUprofile, { id: user })).subscribe(
    {
      next: async ({ value }) => {
        try {
          const profileId =
            profileDocument !== null
              ? profileDocument.id
              : JSON.parse(loggedUser).email;
          if (value.data.onUpdateUprofile.id == profileId) {
            console.log("updateProfile");
            updatedProfile = value.data.onUpdateUprofile;
          } else {
            console.log("user not related to this update");
          }
        } catch (e) {
          console.warn(e);
        }
      },
      error: (error) => console.log(error, " here"),
    }
  );
};

const subscribeToDeleteEvent = async (profileDocument, loggedUser) => {
  await API.graphql(graphqlOperation(onDeleteUserEventConnection)).subscribe({
    next: async ({ value }) => {
      try {
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (value.data.onDeleteUserEventConnection.profileID == profileId) {
          console.log("removeEvent");
          await updateEvents(profileId);
        } else {
          console.log("event not related to this user");
        }
      } catch (e) {
        console.warn(e);
      }
    },
    error: (error) => console.log(error, " here"),
  });
};

const subscribeToAddEvent = async (profileDocument, loggedUser) => {
  await API.graphql(graphqlOperation(onCreateUserEventConnection)).subscribe({
    next: async ({ value }) => {
      try {
        const profileId =
          profileDocument !== null
            ? profileDocument.id
            : JSON.parse(loggedUser).email;
        if (value.data.onCreateUserEventConnection.profileID == profileId) {
          console.log("subscription to createEvent");
          await updateEvents(profileId);
        } else {
          console.log("subscription to createEvent failed");
        }
      } catch (e) {
        console.warn(e);
      }
    },
    error: (error) => console.log(error, " here"),
  });
};

const updateEvents = async (userId) => {
  let response = await getUprofileDoc(userId);
  newEvents = response.eventsCreated.items;
};

export default ProfileScreen;
