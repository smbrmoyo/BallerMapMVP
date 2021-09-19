const { API, graphqlOperation } = require("aws-amplify");
const mutations = require("../graphql/mutations.js");

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create user doc
 * @param {JSON} userData object with userDoc fields (email, deviceToken, phoneNumber)
 */
export const createUserDoc = (userData) => {
  API.graphql(
    graphqlOperation(mutations.createUserDoc, {
      input: {
        email: userData.email,
      },
    })
  );
};

/**
 * @description create user profile
 * @param {JSON} userProfile
 */
export const createUserProfile = (userProfile) => {
  API.graphql(
    graphqlOperation(mutations.createUprofile, {
      input: {
        username: userProfile.username,
        userDocId: userProfile.userDocId,
      },
    })
  );
};

/**
 * @description create user profile
 * @param {JSON} updatedUprofile
 */
export const updateUserProfile = (updatedUprofile) => {
  API.graphql(
    graphqlOperation(mutations.updateUprofile, {
      input: {
        username: updatedUprofile.username,
        name: updatedUprofile.name,
        userDocId: updatedUprofile.userDocId,
        currentPlaceID: updatedUprofile.currentPlaceID,
      },
    })
  );
};

/**
 * @description create user connection
 * @param {JSON} userConnectionData
 */
const createUserConnection = (userConnectionData) => {
  API.graphql(
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
const createUserEventConnection = (eventConnection) => {
  API.graphql(
    graphqlOperation(mutations.createUserEventConnection, {
      input: {
        eventID: eventConnection.eventID,
        profileID: eventConnection.userProfileId,
      },
    })
  );
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
