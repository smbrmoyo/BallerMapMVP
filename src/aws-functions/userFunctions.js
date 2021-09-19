import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations.js';

/**
 * @description create user doc
 * @param {JSON} userData object with userDoc fields (email, deviceToken, phoneNumber)
 */
export const createUserDoc = (userData) => {
    API.graphql(graphqlOperation(mutations.createUserDoc, {
        input: {
            email: userData.email
        }
    }))
}

/**
 * @description create user profile
 * @param {JSON} userProfile 
 */
export const createUserProfile = (userProfile) => {
    API.graphql(graphqlOperation(mutations.createUprofile, {
        input: {
            username: userProfile.username,
            userDocId: userProfile.userDocId
        }
    }))
}

/**
 * @description create user profile
 * @param {JSON} updatedUprofile 
 */
 export const updateUserProfile = (updatedUprofile) => {
    API.graphql(graphqlOperation(mutations.updateUprofile, {
        input: {
            username: updatedUprofile.username,
            name: updatedUprofile.name,
            userDocId: updatedUprofile.userDocId,
            currentPlaceID: updatedUprofile.currentPlaceID
        }
    }))
}

/**
 * @description create user connection
 * @param {JSON} userConnectionData 
 */
const createUserConnection = (userConnectionData) => {
    API.graphql(graphqlOperation(mutations.createUserConnection, {
        input: {
            followerID: userConnectionData.follower,
            followedID: userConnectionData.followed
        }
    }))
}

export const followUser = () => {
    
}