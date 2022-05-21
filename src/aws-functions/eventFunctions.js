import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations.js";
import * as queries from "../graphql/queries.js";
import {
  addUserToEvent,
  createUserDoc,
  createUserProfile,
} from "./userFunctions.js";
import {
  checkName,
  checkLocation,
  checkStart,
  checkEnd,
} from "../screens/AddScreen/helpers";
import { getFilteredPlaces } from "./placeFunctions.js";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

/**
 * @description get event document
 * @param {String} eventId
 * @returns event doc
 */
export const getEvent = async (eventId) => {
  let event = await API.graphql(
    graphqlOperation(queries.getEvent, { id: eventId })
  );
  return event.data.getEvent;
};

/**
 * @description get all events documents
 * @param {JSON} filter ({ field1: value1, ... })
 * @param {Integer} limit maximum number of docs to fetch
 * @returns array of event docs
 */
export const getFilteredEvents = async (user) => {
  try {
    let events = await API.graphql(
      graphqlOperation(queries.listEvents, {
        filter: {
          creatorID: {
            eq: user,
          },
        },
      })
    );
    return events;
  } catch (error) {
    console.log("   Error on getFilteredEvents" + JSON.stringify(error));
  }
};

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create event
 * @param {JSON} eventData object with event fields (name, placeId, beginingTime)
 */
export const createEvent = async (eventData) => {
  let advance = false;
  let createdEvent = {
    id: "",
    name: "",
    creator: { username: "" },
    place: { name: "" },
  };

  if (
    !checkName(eventData.name) ||
    !checkLocation(eventData.placeID) ||
    !checkStart(eventData.begginingTime) ||
    !checkEnd(eventData.endingTime)
  ) {
    return null;
  } else {
    await API.graphql(
      graphqlOperation(mutations.createEvent, {
        input: {
          name: eventData.name,
          placeID: eventData.placeID,
          creatorID: eventData.creatorID,
          beginningTime: eventData.beginningTime,
          endingTime: eventData.endingTime,
          tags: eventData.tags,
          description: eventData.description,
          privacy: eventData.privacy,
          status: eventData.status,
        },
      })
    )
      .then((result) => {
        createdEvent = {
          id: result.data.createEvent.id,
          name: result.data.createEvent.name,
          creatorID: result.data.createEvent.creatorID,
          description: result.data.createEvent.description,
          begginingTime: result.data.createEvent.begginingTime,
          creator: {
            username: result.data.createEvent.creator.username,
            id: result.data.createEvent.creator.id,
            userDocId: result.data.createEvent.creator.userDocId,
            updatedAt: result.data.createEvent.creator.updatedAt,
            createdAt: result.data.createEvent.creator.createdAt,
          },
          place: {
            address: result.data.createEvent.place.address,
            name: result.data.createEvent.place.name,
            id: result.data.createEvent.place.id,
            updatedAt: result.data.createEvent.place.updatedAt,
            createdAt: result.data.createEvent.place.createdAt,
          },
          placeID: result.data.createEvent.placeID,
          status: result.data.createEvent.status,
          privacy: result.data.createEvent.privacy,
          updatedAt: result.data.createEvent.updatedAt,
          createdAt: result.data.createEvent.createdAt,
        };
        advance = true;
      })
      .catch((error) => {
        console.log("Error creating an event ---------->", error);
      });

    if (advance) {
      let participants = eventData.participants;
      for (let participantID in participants) {
        console.log(participants[participantID]);

        await API.graphql(
          graphqlOperation(mutations.createUserEventConnection, {
            input: {
              eventID: createdEvent.id,
              profileID: participants[participantID],
            },
          })
        )
          .then((res) => {
            console.log(
              `${res.data.createUserEventConnection.userProfile.username} added to ${res.data.createUserEventConnection.Event.name} Event`
            );
          })
          .catch((err) => {
            console.log(
              `Error in mutation createUserEventConnection, adding user ${participants[participantID]} to event ${createdEvent.id} -------------> ${err}`
            );
          });

        await API.graphql(
          graphqlOperation(mutations.createNotification, {
            input: {
              type: "eventInvitation",
              profileID: participants[participantID],
              body: `${createdEvent.creator.username} invited you to a game`,
            },
          })
        )
          .then((result) => {
            console.log(
              `${result.data.createNotification.type} notification sent to user ${participants[participantID]}`
            );
          })
          .catch((err) => {
            console.log(
              `Error in mutation createUserEventConnection, adding user ${participants[participantID]} to event ${createdEvent.id} -------------> ${err}`
            );
          });
      }
    }

    if (advance) {
      console.log("  Request Successful !!!!!");
      return createdEvent;
    } else {
      console.log("Request UnSuccessful !!!!!");
    }
  }
};

/**
 * @description update event
 * @param {JSON} updatedEvent object
 */

export const updateEvent = async (eventData) => {
  let advance = false;
  let updatedEvent = {
    id: eventData.id,
    name: "",
    creator: { username: "" },
    place: { name: "" },
  };

  await API.graphql(
    graphqlOperation(mutations.updateEvent, {
      input: {
        id: updatedEvent.id,
        name: eventData.name,
        placeID: eventData.placeID,
        beginningTime: eventData.beginningTime,
        endingTime: eventData.endingTime,
        tags: eventData.tags,
        description: eventData.description,
        privacy: eventData.privacy,
      },
    })
  )
    .then((result) => {
      updatedEvent = {
        id: result.data.updateEvent.id,
        name: result.data.updateEvent.name,
        creatorID: result.data.updateEvent.creatorID,
        description: result.data.updateEvent.description,
        begginingTime: result.data.updateEvent.begginingTime,
        creator: {
          username: result.data.updateEvent.creator.username,
          id: result.data.updateEvent.creator.id,
          userDocId: result.data.updateEvent.creator.userDocId,
          updatedAt: result.data.updateEvent.creator.updatedAt,
          createdAt: result.data.updateEvent.creator.createdAt,
        },
        place: {
          address: result.data.updateEvent.place.address,
          name: result.data.updateEvent.place.name,
          id: result.data.updateEvent.place.id,
          updatedAt: result.data.updateEvent.place.updatedAt,
          createdAt: result.data.updateEvent.place.createdAt,
        },
        placeID: result.data.updateEvent.placeID,
        updatedAt: result.data.updateEvent.updatedAt,
        createdAt: result.data.updateEvent.createdAt,
      };
      advance = true;
    })
    .catch((error) => {
      console.log("Error updating an event ---------->", error);
    });

  if (advance) {
    let participants = eventData.participantsIDs;
    for (let participantID in participants) {
      await API.graphql(
        graphqlOperation(mutations.createUserEventConnection, {
          input: {
            eventID: updatedEvent.id,
            profileID: participants[participantID],
          },
        })
      )
        .then((res) => {
          console.log(
            `${res.data.createUserEventConnection.userProfile.username} added to ${res.data.createUserEventConnection.Event.name} Event`
          );
        })
        .catch((err) => {
          console.log(
            `Error in mutation createUserEventConnection, adding user ${participants[participantID]} to event ${updatedEvent.id} -------------> ${err}`
          );
        });

      await API.graphql(
        graphqlOperation(mutations.createNotification, {
          input: {
            type: "eventInvitation",
            profileID: participants[participantID],
            body: `${updatedEvent.creator.username} invited you to a game`,
          },
        })
      )
        .then((result) => {
          console.log(
            `${result.data.createNotification.type} notification sent to user ${participants[participantID]}`
          );
        })
        .catch((err) => {
          console.log(
            `Error in mutation createUserEventConnection, adding user ${
              participants[participantID]
            } to event ${updatedEvent.id} -------------> ${JSON.stringify(err)}`
          );
        });
    }
  }

  if (advance) {
    console.log("  Request Successful !!!!!");
    return updatedEvent;
  } else {
    console.log("Request UnSuccessful !!!!!");
  }
};

/**
 * @description delete event
 * @param {JSON} eventId object
 */
export const deleteEvent = async (eventId) => {
  let result = await API.graphql(
    graphqlOperation(mutations.deleteEvent, {
      input: {
        id: eventId,
      },
    })
  );
  return result;
};

/**
 * @description add participant to event
 * @param {JSON} userToEventData with fields (eventId, userProfileId)
 * @returns
 */
export const addParticipant = (userToEventData) => {
  return addUserToEvent(userToEventData);
};

/*
 * =============================================================================
 *                                  SUBSCRIPTIONS
 * =============================================================================
 */

/**
 * First you need to check the directory to the subscriptions.js file
 * then add import * as subscriptions from '../graphql/subscriptions.js';
 * @param subscription subscription to use; e.g subscriptions.onCreateEvent
 * @param {function} functionToExecuteWithData function to execute with userDoc as soon as it is created
 */
export const subscribeOnEvent = (subscription, functionToExecuteWithData) => {
  API.graphql(
    //e.g graphqlOperation(subscriptions.onCreateEvent)
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
 * @param subscription subscription to use; e.g subscriptions.onCreateUserEventConnection
 * @param {function} functionToExecuteWithData function to execute with userDoc as soon as it is created
 */
export const subscribeOnUserEvent = (
  subscription,
  functionToExecuteWithData
) => {
  API.graphql(
    //e.g graphqlOperation(subscriptions.onCreateUserEventConnection)
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
