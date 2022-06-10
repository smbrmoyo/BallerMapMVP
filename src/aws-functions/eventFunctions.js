import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations.js";
import * as queries from "../graphql/queries.js";
import { createUserDoc, createUserProfile } from "./userFunctions.js";
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
 * @description get Event
 * @param {String} eventId
 * @returns event Doc
 */
export const getEvent = async (eventId) => {
  try {
    let event = await API.graphql(
      graphqlOperation(queries.getEvent, { id: eventId })
    );
    return event.data.getEvent;
  } catch (error) {
    console.log("Error on getEvent: " + JSON.stringify(error));
  }
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
    return events.data.listEvents;
  } catch (error) {
    console.log("Error on getFilteredEvents: " + JSON.stringify(error));
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
    !checkStart(eventData.beginningTime) ||
    !checkEnd(eventData.beginningTime, eventData.endingTime)
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
        createdEvent = { ...result };
        console.log("Logging createdEvent from createEvent: ");
        console.log(createdEvent);
        advance = true;
      })
      .catch((error) => {
        console.log("Error creating an event: ", JSON.stringify(error));
      });

    if (advance) {
      let participants = eventData.participants;
      for (let participantID in participants) {
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
 * @description update Event
 * @param {JSON} eventData object
 */

export const updateEvent = async (eventData) => {
  let advance = false;
  let updatedEvent = {
    id: eventData.id,
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
        updatedEvent = { ...result };
        console.log(updatedEvent);
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
              } to event ${updatedEvent.id} -------------> ${JSON.stringify(
                err
              )}`
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
  }
};

/**
 * @description delete event
 * @param {JSON} eventId object
 */
export const deleteEvent = async (eventId) => {
  try {
    let result = await API.graphql(
      graphqlOperation(mutations.deleteEvent, {
        input: {
          id: eventId,
        },
      })
    );
    return result.data.deleteEvent;
  } catch (error) {
    console.log("Error deleting Event: " + JSON.stringify(error));
  }
};
