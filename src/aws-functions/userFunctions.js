import { Auth, API, graphqlOperation } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userConf from "./userConf";
import placesJSON from "../assets/data/placesJSON";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

export const getAuthenticatedUser = () => {
  Auth.currentAuthenticatedUser()
    .then((authUser) => {
      userConf.email = authUser.attributes.email;
    })
    .catch((err) => {
      console.error(err);
    });
};

/**
 * @description user's doc Id
 */

export const getUserDoc = async (userDocId) => {
  let userDoc = await API.graphql(
    graphqlOperation(queries.getUserDoc, { id: userDocId })
  );

  return userDoc;
};

export const getUprofileDoc = async (uProfileDocId) => {
  let uProfileDoc = await API.graphql(
    graphqlOperation(queries.getUprofile, { id: uProfileDocId })
  );

  return uProfileDoc;
};

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create user doc
 * @param {JSON} userData object with userDoc fields (email, deviceToken, phoneNumber)
 */

export const createUserDoc = async (userData) => {
  let userDoc = await API.graphql(
    graphqlOperation(mutations.createUserDoc, {
      input: {
        email: userData.email,
      },
    })
  );
  userConf.userDocId = userDoc.data.createUserDoc.id;

  AsyncStorage.setItem("userDocId", userDoc.data.createUserDoc.id);

  return userDoc;
};

/**
 * @description create user profile
 * @param {JSON} userDataInfo
 * @param {JSON} userProfile
 */

export const createUserProfile = async (userProfile) => {
  let uProfile = await API.graphql(
    graphqlOperation(mutations.createUprofile, {
      input: {
        username: userProfile.username,
        userDocId: userProfile.userDocId,
      },
    })
  );

  AsyncStorage.setItem("userProfileId", uProfile.data.createUprofile.id);

  return uProfile;
};

/**
 * @description create user profile
 * @param {JSON} updatedUprofile
 */
export const updateUserProfile = async (updatedUprofile) => {
  //const uProfile = await API.graphql({ query: queries.getUprofile, variables: { id: userConf.uProfileId }});
  console.log(updatedUprofile);

  return await API.graphql(
    graphqlOperation(mutations.updateUprofile, {
      input: {
        id: userConf.uProfileId,
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
const createUserConnection = async (userConnectionData) => {
  return await API.graphql(
    graphqlOperation(mutations.createUserConnection, {
      input: {
        followerID: userConnectionData.follower,
        followedID: userConnectionData.followed,
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
