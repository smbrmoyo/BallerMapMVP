import { Auth, API, graphqlOperation, DataStore, JS } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserConnection } from "../models";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

/**
 * @description gets the authenticated user
 * @returns {JSON} Cognito user object
 */
export const getAuthenticatedUser = async () => {
  try {
    let user = await Auth.currentAuthenticatedUser().catch((err) => {
      console.error(err);
    });
    return user;
  } catch (error) {
    console.log("Error in getAuthenticatedUser: " + JSON.stringify(error));
  }
};

/**
 *
 * @param {ID} user - user's id
 * @returns {JSON} user Doc
 */
export const getUserDoc = async (user) => {
  try {
    let userDoc = await API.graphql(
      graphqlOperation(queries.getUserDoc, { id: user })
    );
    return userDoc.data.getUserDoc;
  } catch (error) {
    console.log("Error in getUserDoc: " + JSON.stringify(error));
  }
};

/**
 *
 * @param {ID} user user's id
 * @returns {JSON} user's profile Doc
 */
export const getUprofileDoc = async (user) => {
  try {
    let uProfileDoc = await API.graphql(
      graphqlOperation(queries.getUprofile, {
        id: user,
      })
    );
    return uProfileDoc.data.getUprofile;
  } catch (error) {
    console.log("Error on getUprofileDoc" + JSON.stringify(error));
  }
};

/**
 * @description get all user profiles
 * @param {ID} user user's id
 * @returns {JSON} list of user profiles
 */

export const getAllUserProfiles = async (user) => {
  try {
    let usersList = await API.graphql(
      graphqlOperation(queries.listUprofiles, {
        filter: {
          id: { ne: user },
        },
      })
    );
    return usersList.data.listUprofiles.items;
  } catch (error) {
    console.log(" ");
  }
};

/**
 * @description get all notifications from a user
 * @param {ID} user user's id
 * @returns {JSON} list of notifications from a user
 */

export const getAllNotifications = async (user) => {
  try {
    let notifs = await API.graphql(
      graphqlOperation(queries.getNotificationsByDate, {
        sortDirection: "DESC",
        profileID: user,
      })
    );
    return notifs.data.getNotificationsByDate.items;
  } catch (error) {
    console.log("Error in getAllNotifications: " + JSON.stringify(error));
  }
};

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create user doc
 * @param {JSON} userData object with userDoc required field email
 */

export const createUserDoc = async (userData) => {
  try {
    let userDoc = await API.graphql(
      graphqlOperation(mutations.createUserDoc, {
        input: {
          email: userData.email,
          id: userData.email,
          profileID: userData.email,
        },
      })
    );

    return userDoc.data.createUserDoc;
  } catch (error) {
    console.log("Error in createUserDoc: " + JSON.stringify(error));
  }
};

/**
 * @description create user profile
 * @param {JSON} userProfile
 */

export const createUserProfile = async (userProfile) => {
  try {
    let uProfile = await API.graphql(
      graphqlOperation(mutations.createUprofile, {
        input: {
          id: userProfile.id,
          username: userProfile.username,
          userDocId: userProfile.userDocId,
          name: userProfile.name,
          profilePicture: userProfile.profilePicture,
        },
      })
    );
    return uProfile.data.createUprofile;
  } catch (error) {
    console.log("Error in createUserProfile: " + JSON.stringify(error));
  }
};

/**
 * @description update user profile
 * @param {JSON} updatedUprofile
 */
export const updateUserProfile = async (updatedUprofile) => {
  try {
    let uProfile = await API.graphql(
      graphqlOperation(mutations.updateUprofile, {
        input: {
          id: updatedUprofile.id,
          username: updatedUprofile.username,
          name: updatedUprofile.name,
          cityCountry: updatedUprofile.cityCountry,
          profilePicture: updatedUprofile.profilePicture,
        },
      })
    );
    return uProfile.data.updateUprofile;
  } catch (error) {
    console.log("Error in updateUserProfile: " + JSON.stringify(error));
  }
};

/**
 * @description create user connection
 * @param {JSON} userConnectionData
 */

export const createUserConnection = async (userConnectionData) => {
  let advance = false;
  let userConnection;

  await API.graphql(
    graphqlOperation(mutations.createUserConnection, {
      input: {
        id: userConnectionData.follower + userConnectionData.followed,
        followerID: userConnectionData.follower,
        followedID: userConnectionData.followed,
      },
    })
  )
    .then((res) => {
      advance = true;
      userConnection = {
        id: res.data.createUserConnection.id,
        followerID: res.data.createUserConnection.followerID,
        followedID: res.data.createUserConnection.followedID,
        follower: {
          username: res.data.createUserConnection.follower.username,
          id: res.data.createUserConnection.follower.id,
          userDocId: res.data.createUserConnection.follower.userDocId,
          updatedAt: res.data.createUserConnection.follower.updatedAt,
          createdAt: res.data.createUserConnection.follower.createdAt,
        },
        followed: {
          username: res.data.createUserConnection.followed.username,
          id: res.data.createUserConnection.followed.id,
          userDocId: res.data.createUserConnection.followed.userDocId,
          updatedAt: res.data.createUserConnection.followed.updatedAt,
          createdAt: res.data.createUserConnection.followed.createdAt,
        },
        updatedAt: res.data.createUserConnection.updatedAt,
        createdAt: res.data.createUserConnection.createdAt,
      };
    })
    .catch((error) => {
      console.log(
        "   !!!ERROR in follow request. Request arguments:",
        JSON.stringify(error)
      );
    });

  if (advance) {
    await API.graphql(
      graphqlOperation(mutations.createNotification, {
        input: {
          profileID: userConnection.followedID,
          type: "newFollower",
          body: `${userConnection.follower.username} just followed you`,
        },
      })
    )
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(
          "   !!!ERROR in notification request. Request arguments : " +
            JSON.stringify(err)
        );
      });
  }
};

/**
 * @description delete user connection
 * @param {JSON} userConnectionData
 */

export const deleteUserConnection = async (userConnectionData) => {
  try {
    let del = await API.graphql(
      graphqlOperation(mutations.deleteUserConnection, {
        input: {
          id: userConnectionData.follower + userConnectionData.followed,
        },
      })
    );
  } catch (error) {
    console.log("Error in deleteUserConnection: " + JSON.stringify(error));
  }
};

/**
 * @description create user event connection
 * @param {JSON} eventConnection
 */

const createUserEventConnection = async (eventConnection) => {
  try {
    let userEventConnection = await API.graphql(
      graphqlOperation(mutations.createUserEventConnection, {
        input: {
          eventID: eventConnection.eventID,
          profileID: eventConnection.userProfileId,
        },
      })
    );
    return userEventConnection.data.createUserEventConnection;
  } catch (error) {
    console.log("Error in createUserEventConnection: " + JSON.stringify(error));
  }
};

/*Next mutation should be deleteAccount
 * We would delete userDoc, profileDoc and removeItem AsyncStorage("profileCreated to false")
 */

export const deleteAccount = async (id) => {
  let advance = false;

  try {
    await API.graphql(
      graphqlOperation(mutations.deleteUprofile, {
        input: {
          id: id,
        },
      })
    ).then((response) => {
      advance = true;
    });
  } catch (error) {
    console.log("Error deleting uProfile:", error);
  }

  if (advance) {
    try {
      await API.graphql(
        graphqlOperation(mutations.deleteUserDoc, {
          input: {
            id: id,
          },
        })
      );
    } catch (error) {
      console.log("Error deleting userDoc:", error);
    }

    try {
      await Auth.currentAuthenticatedUser().then((user) => {
        user.deleteUser((error, data) => {
          if (error) {
            throw error;
          }
          Auth.signOut({ global: true });
        });
      });
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  }
};
