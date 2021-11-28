import { Auth, API, graphqlOperation, DataStore } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userConf from "./userConf";
import placesJSON from "../assets/data/placesJSON";
import { UserConnection } from "../models";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

export const getAuthenticatedUser = async () => {
  let user = await Auth.currentAuthenticatedUser().catch((err) => {
    console.error(err);
  });
  return user;
};

/**
 * @description user's username
 */

export const getUserDoc = async (email) => {
  let userDoc = await API.graphql(
    graphqlOperation(queries.getUserDoc, { id: email })
  );
  return userDoc.data.getUserDoc;
};

export const getUprofileDoc = async (email) => {
  try {
    let uProfileDoc = await API.graphql(
      graphqlOperation(queries.getUprofile, {
        id: email,
      })
    );
    return uProfileDoc.data.getUprofile;
  } catch (error) {
    console.log("Error getting on getUprofileDoc" + JSON.stringify(error));
  }
};

/**
 * @description get all user profiles
 * @returns list of user profiles
 */
export const getAllUserProfiles = async () => {
  let usersList = await API.graphql(graphqlOperation(queries.listUprofiles));
  return usersList.data.listUprofiles.items;
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
  let userDoc = await API.graphql(
    graphqlOperation(mutations.createUserDoc, {
      input: {
        email: userData.email,
        id: userData.email,
        profileID: userData.email,
      },
    })
  );

  //AsyncStorage.setItem("userDocId", userDoc.data.createUserDoc.id);

  return userDoc.data.createUserDoc;
};

/**
 * @description create user profile
 * @param {JSON} userDataInfo
 * @param {JSON} userProfile
 */

export const createUserProfile = async (userProfile) => {
  console.log(
    "   Création du profile utilisateur:",
    JSON.stringify(userProfile)
  );
  let uProfile = await API.graphql(
    graphqlOperation(mutations.createUprofile, {
      input: {
        id: userProfile.id,
        username: userProfile.username,
        userDocId: userProfile.userDocId,
        name: userProfile.name,
      },
    })
  ).catch((error) => {
    console.log(
      "ERREUR dans la requête createUserProfile: " + JSON.stringify(error)
    );
    throw "ERREUR dans la requête createUserProfile: " + JSON.stringify(error);
  });
  //AsyncStorage.setItem("userProfileId", uProfile.data.createUprofile.id);
  return uProfile.data.createUprofile;
};

/**
 * @description create user profile
 * @param {JSON} updatedUprofile
 */
export const updateUserProfile = async (updatedUprofile) => {
  //const uProfile = await API.graphql({ query: queries.getUprofile, variables: { id: userConf.uProfileId }});
  // console.log(updatedUprofile);

  return API.graphql(
    graphqlOperation(mutations.updateUprofile, {
      input: {
        id: updatedUprofile.id,
        username: updatedUprofile.username,
        name: updatedUprofile.name,
      },
    })
  );
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
        JSON.stringify(ctx.input),
        "Error",
        err
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
      .then((result) => {
        console.log(
          `   ${res.data.createUserConnection.follower.username} successfully followed ${res.data.createUserConnection.follower.username}`
        );
      })
      .catch((err) => {
        console.log(
          "   !!!ERROR in follow request. Request arguments:",
          JSON.stringify(ctx.input),
          "Error",
          err
        );
      });
  }
};

/**
 * @description delete user connection
 * @param {JSON} userConnectionData
 */
export const deleteUserConnection = async (userConnectionData) => {
  return API.graphql(
    graphqlOperation(mutations.deleteUserConnection, {
      input: {
        id: userConnectionData.follower + userConnectionData.followed,
      },
    })
  );
};

export const followUser = (userConnection) => {
  return createUserConnection(userConnection);
};

/**
 * @description create user event connection
 * @param {JSON} eventConnection
 */

const createUserEventConnection = async (eventConnection) => {
  let userEventConnection = await API.graphql(
    graphqlOperation(mutations.createUserEventConnection, {
      input: {
        eventID: eventConnection.eventID,
        profileID: eventConnection.userProfileId,
      },
    })
  );
  return userEventConnection.data.createUserEventConnection;
};

export const addUserToEvent = (userToEventData) => {
  return createUserEventConnection(userToEventData);
};

/**Next mutation should be deleteAccount
 * We would delete userDoc, profileDoc and removeItem AsyncStorage("profileCreated to false")
 */

/*
 * =============================================================================
 *                                  SUBSCRIPTIONS
 * =============================================================================
 */

/**
 * First you need to check the directory to the subscriptions.js file
 * then add import * as subscriptions from '../graphql/subscriptions.js';
 * @param subscription subscription to use; e.g subscriptions.onCreateUserDoc
 * @param {function} functionToExecuteWithData function to execute with userDoc as soon as it is created
 */
export const subscribeOnUserDoc = (subscription, functionToExecuteWithData) => {
  API.graphql(
    //graphqlOperation(subscriptions.onCreateUserDoc)
    graphqlOperation(subscription)
  ).subscribe({
    next: ({ provider, value }) => {
      // Here should be your function to execute with the received data;
      console.log({ provider, value });
      functionToExecuteWithData({ provider, value });
    },
    error: (error) => console.error(error),
  });
};

/**
 * First you need to check the directory to the subscriptions.js file
 * then add import * as subscriptions from '../graphql/subscriptions.js';
 * @param subscription subscription to use; e.g subscriptions.onCreateUserConnection
 * @param {function} functionToExecuteWithData function to execute with userConnection as soon as it is created
 */
export const subscribeOnUserConnection = (
  subscription,
  functionToExecuteWithData
) => {
  API.graphql(
    //graphqlOperation(subscriptions.onCreateUserConnection)
    graphqlOperation(subscription)
  ).subscribe({
    next: ({ provider, value }) => {
      // Here should be your function to execute with the received data;
      console.log({ provider, value });
      functionToExecuteWithData({ provider, value });
    },
    error: (error) => console.error(error),
  });
};
