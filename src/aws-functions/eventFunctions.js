import {API, graphqlOperation} from "aws-amplify";

import * as mutations from "../graphql/mutations.js";
import * as queries from "../graphql/queries.js";
import {checkEnd, checkLocation, checkName, checkStart,} from "../screens/AddScreen/helpers";

/**
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
    return events.data.listEvents.items;
  } catch (error) {
    console.log("Error on getFilteredEvents: " + JSON.stringify(error));
  }
};

/**
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description send notifications to expo server
 * @param {ID} eventId Id of the created event
 * @returns createdEvent
 */

const sendEventNotifications = (eventId) => {
  getEvent(eventId).then((event) => {
    let notifications = event?.participants?.items.map((token) => {
      if (
        token.userProfile.expoPushToken !== null ||
        token.userProfile.expoPushToken !== undefined
      ) {
        return {
          to: token.userProfile.expoPushToken,
          sound: "default",
          title: "New Event",
          badge: 1,
          body: `${event.creator.username} has invited you to a new event`,
          data: {
            eventId: eventId,
          },
        };
      }
    });

    if (notifications.length > 0) {
      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          accept: "application/json",
          "accept-encoding": "gzip, deflate",
          "content-type": "application/json",
        },
        body: JSON.stringify(notifications),
      })
        .then((response) => {
          console.log("Push notifications successful");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

/**
 * @description create event
 * @param {JSON} eventData object with event fields (name, placeId, beginingTime)
 * @returns createdEvent
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
          participantsIDs: eventData.participants,
        },
      })
    )
      .then((result) => {
        createdEvent = { ...result.data.createEvent };
        advance = true;
      })
      .catch((error) => {
        console.log("Error creating an event: ", JSON.stringify(error));
      });

    if (advance) {
      let participants = eventData.participants;
      for (let participantID of participants) {
        await API.graphql(
          graphqlOperation(mutations.createUserEventConnection, {
            input: {
              eventID: createdEvent.id,
              profileID: participantID,
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
              `Error in mutation createUserEventConnection, adding user ${participantID} to event ${
                createdEvent.id
              } -------------> ${JSON.stringify(err)}`
            );
          });

        await API.graphql(
          graphqlOperation(mutations.createNotification, {
            input: {
              type: "eventInvitation",
              profileID: participantID,
              body: `${createdEvent.creator.username} invited you to a game`,
              eventId: createdEvent.id,
            },
          })
        )
          .then((result) => {
            console.log(
              `${result.data.createNotification.type} notification sent to user ${participantID}`
            );
          })
          .catch((err) => {
            console.log(
              `Error in mutation createNotification, adding user ${participantID} to event ${
                createdEvent.id
              } -------------> ${JSON.stringify(err)}`
            );
          });
      }
      sendEventNotifications(createdEvent.id);
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
 * @param {Object} eventData object
 * @param {[String]} idsToAdd List of ids to add to the event
 * @param {[String]} idsToRemove List of ids to remove from the event
 */

export const updateEvent = async (eventData, idsToAdd, idsToRemove) => {
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
    !checkEnd(eventData.beginningTime, eventData.endingTime)
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
        updatedEvent = { ...result.data.updateEvent };
        advance = true;
      })
      .catch((error) => {
        console.log("Error updating an event ---------->", error);
      });

    if (advance) {
      for (let participantID of idsToRemove) {
        await API.graphql(
          graphqlOperation(mutations.deleteUserEventConnection, {
            input: {
              id: updatedEvent.id + participantID,
            },
          })
        )
          .then((res) => {
            console.log(
              `${res.data.deleteUserEventConnection.userProfile.username} removed from ${res.data.deleteUserEventConnection.Event.name} Event`
            );
          })
          .catch((err) => {
            console.log(
              `Error in mutation deleteUserEventConnection, removing user ${participantID} from event ${updatedEvent.id} ------------->`,
              err
            );
          });
      }

      for (let participantID of idsToAdd) {
        await API.graphql(
          graphqlOperation(mutations.createUserEventConnection, {
            input: {
              eventID: updatedEvent.id,
              profileID: participantID,
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
              `Error in mutation createUserEventConnection, adding user ${participantID} to event ${updatedEvent.id} -------------> ${err}`
            );
          });

        await API.graphql(
          graphqlOperation(mutations.createNotification, {
            input: {
              type: "eventInvitation",
              profileID: participantID,
              body: `${updatedEvent.creator.username} invited you to a game`,
            },
          })
        )
          .then((result) => {
            console.log(
              `${result.data.createNotification.type} notification sent to user ${participantID}`
            );
          })
          .catch((err) => {
            console.log(
              `Error in mutation createUserEventConnection, adding user ${participantID} to event ${
                updatedEvent.id
              } -------------> ${JSON.stringify(err)}`
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
