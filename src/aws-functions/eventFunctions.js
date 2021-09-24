import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations.js';
import * as queries from '../graphql/queries.js';
import { addUserToEvent } from './userFunctions.js';
import { getFilteredPlaces } from './placeFunctions.js';

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
    let event = await API.graphql(graphqlOperation(queries.getEvent, { id: eventId }));
    return event;
}

/**
 * @description get all events documents
 * @param {JSON} filter ({ field1: value1, ... })
 * @param {Integer} limit maximum number of docs to fetch
 * @returns array of event docs
 */
 export const getFilteredEvents = async (filter, limit) => {
    let events = await API.graphql(graphqlOperation(queries.listEvents, {
        filter,
        limit
    }));
    return events;
}

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
    let event = await API.graphql(graphqlOperation(mutations.createEvent, {
        input: {
            name: eventData.name,
            placeID:  getFilteredPlaces({ name: eventData.placeName }, 1),
            creatorID: eventData.creator,
            beginningTime: new Date(eventData.beginningTime).toISOString(),
            endingTime: new Date(eventData.endingTime).toISOString(),
            tags: eventData.tags,
            description: eventData.description,
            privacy: eventData.privacy
        }
    }));
    return event;
}

/**
 * @description update event
 * @param {JSON} updatedEvent object 
 */
export const updateEvent = async (updatedEvent) => {
    let event = await API.graphql(graphqlOperation(mutations.updateEvent, {
        input: {
            id: eventData.id,
            name: updatedEvent.name,
            placeID: updatedEvent.placeID,
            beginningTime: new Date(updatedEvent.beginningTime).toISOString(),
            endingTime: new Date(updatedEvent.endingTime).toISOString(),
            tags: updatedEvent.tags,
            description: updatedEvent.description,
            privacy: updatedEvent.privacy
        }
    }));
    return event;
}

/**
 * @description delete event
 * @param {JSON} eventId object
 */
export const deleteEvent = (eventId) => {
    let result = await API.graphql(graphqlOperation(mutations.deleteEvent, {
        input: {
            id: eventId
        }
    }));
    return result;
}

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
 export const subscribeOnUserEvent = (subscription, functionToExecuteWithData) => {
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