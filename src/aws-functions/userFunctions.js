import {API, Auth, graphqlOperation} from "aws-amplify";

import {checkName, checkUsername} from "../screens/SetProfileScreen/helpers";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/**
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

/**
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description send notifications to expo server
 * @param {ID} profileID Id of the followed user
 * @param {String} expoPushToken Token of the followed user
 * @param {String} username Username of the user
 */

const sendFollowInvitation = (profileID, expoPushToken, username) => {
  getUprofileDoc(profileID).then((res) => {
    let notification = {
      to: res.expoPushToken,
      sound: "default",
      title: "New Follower", // Watch what TT and IG write
      badge: 1,
      body: `${username} has started to follow you`,
      data: {
        profileID: profileID,
      },
    };

    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json",
      },
      body: JSON.stringify(notification),
    })
      .then((response) => {
        console.log("Push notifications successful");
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

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
    if (!checkName(userProfile.name) || !checkUsername(userProfile.username)) {
      return null;
    } else {
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
    }
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
    if (
      !checkName(updatedUprofile.name) ||
      !checkUsername(updatedUprofile.username)
    ) {
      return null;
    } else {
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
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description updates cityCountry in profileDoc
 * @param {JSON} userData Object with id and cityCountry
 */
export const updateCityCountry = async (userData) => {
  try {
    let uProfile = await API.graphql(
      graphqlOperation(mutations.updateUprofile, {
        input: {
          id: userData.id,
          cityCountry: userData.cityCountry,
        },
      })
    );
    return uProfile.data.updateUprofile;
  } catch (error) {
    console.log("Error in updateCityCountry: " + JSON.stringify(error));
  }
};

/**
 * @description updates expoPushToken in profileDoc
 * @param {Object} userData Object with id and cityCountry
 */
export const updatePushToken = async (userData) => {
  try {
    let uProfile = await API.graphql(
      graphqlOperation(mutations.updateUprofile, {
        input: {
          id: userData.id,
          expoPushToken: userData.expoPushToken,
        },
      })
    );
    return uProfile.data.updateUprofile;
  } catch (error) {
    console.log("Error in updatePushToken: " + JSON.stringify(error));
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
      userConnection = { ...res.data.createUserConnection };
    })
    .catch((error) => {
      console.log(
        "   !!!ERROR in follow request. Request arguments:",
        JSON.stringify(error)
      );
    });

  if (advance) {
    try {
      await API.graphql(
        graphqlOperation(mutations.createNotification, {
          input: {
            profileID: userConnection.followedID,
            type: "newFollower",
            body: `${userConnection.follower.username} followed you`,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }

    sendFollowInvitation(
      userConnection.followedID,
      userConnection.follower.expoPushToken,
      userConnection.follower.username
    );
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
    console.log("Error in deleteUserConnection: " + JSON.stringify(error)); //ToDo: delete notification
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

/**
 * @description delete user
 * @param {JSON} profileDoc
 */

export const deleteAccount = async (profileDoc) => {
  let advance = false;

  for (let connection of profileDoc?.followers?.items) {
    try {
      await API.graphql(
        graphqlOperation(mutations.deleteUserConnection, {
          input: {
            id: connection.id,
          },
        })
      );
    } catch (error) {
      console.log(
        `Error deleting userConnection ${connection.id} while deleting account:`,
        error
      );
    }
  }
  for (let connection of profileDoc?.following?.items) {
    try {
      await API.graphql(
        graphqlOperation(mutations.deleteUserConnection, {
          input: {
            id: connection.id,
          },
        })
      );
    } catch (error) {
      console.log(
        `Error deleting userConnection ${connection.id} while deleting account:`,
        error
      );
    }
  }

  try {
    await API.graphql(
      graphqlOperation(mutations.deleteUprofile, {
        input: {
          id: profileDoc.id,
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
            id: profileDoc.id,
          },
        })
      );
    } catch (error) {
      console.log("Error deleting userDoc:", error);
    }

    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log("Error deleting user", error);
    }
  }
};
