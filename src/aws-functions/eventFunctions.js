import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'src/graphql/mutations.js';

/**
 * @description create event
 * @param {JSON} eventData object with userDoc fields (email, deviceToken, phoneNumber)
 */
export const createEvent = (eventData) => {
    API.graphql(graphqlOperation(mutations.createUserDoc, {
        input: {
            name: eventData.name,
            placeID: eventData.placeID,
            //Get current auth user
            creatorID: Auth.currentAuthenticatedUser(),
            beginningTime: new Date(eventData.beginningTime).toISOString(),
            endingTime: new Date(eventData.endingTime).toISOString(),
            tags: eventData.tags,
            description: eventData.description,
            privacy: eventData.privacy
        }
    }))
}

/**
 * @description update event
 * @param {JSON} updatedEvent object 
 */
export const updateEvent = (updatedEvent) => {
    API.graphql(graphqlOperation(mutations.createUserProfile, {
        input: {
            name: updatedEvent.name,
            placeID: updatedEvent.placeID,
            beginningTime: new Date(updatedEvent.beginningTime).toISOString(),
            endingTime: new Date(updatedEvent.endingTime).toISOString(),
            tags: updatedEvent.tags,
            description: updatedEvent.description,
            privacy: updatedEvent.privacy
        }
    }))
}