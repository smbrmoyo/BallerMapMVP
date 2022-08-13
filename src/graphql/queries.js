/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      beginningTime
      chat {
        nextToken
      }
      createdAt
      creator {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      creatorID
      description
      endingTime
      eventPictures
      eventVideos
      id
      name
      participantsIDs
      participants {
        items {
          userProfile {
            id
            name
            username
            expoPushToken
          }
        }
      }
      place {
        address
        createdAt
        id
        name
        updatedAt
      }
      placeID
      privacy
      status
      profilePic
      tags
      updatedAt
    }
  }
`;
export const getEventChatMessage = /* GraphQL */ `
  query GetEventChatMessage($id: ID!) {
    getEventChatMessage(id: $id) {
      body
      createdAt
      event {
        beginningTime
        createdAt
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        placeID
        privacy
        profilePic
        tags
        updatedAt
      }
      eventID
      id
      profileID
      updatedAt
      userProfile {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      body
      createdAt
      id
      photo
      profileID
      type
      eventId
      uProfile {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      updatedAt
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      address
      attendings {
        nextToken
      }
      coords {
        lat
        long
      }
      createdAt
      currentPlayers {
        nextToken
      }
      events {
        nextToken
      }
      id
      name
      updatedAt
    }
  }
`;
export const getUprofile = /* GraphQL */ `
  query GetUprofile($id: ID!) {
    getUprofile(id: $id) {
      id
      username
      name
      profilePicture
      userDocId
      cityCountry
      currentPlaceID
      expoPushToken
      notifications {
        items {
          id
          body
          profileID
          photo
          createdAt
          type
          updatedAt
        }
        nextToken
      }
      myEvents {
        items {
          id
          eventID
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      eventsCreated {
        items {
          id
          name
          placeID
          creatorID
          beginningTime
          endingTime
          tags
          place {
            address
          }
          description
          privacy
          profilePic
          eventPictures
          eventVideos
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          followerID
          followedID
          follower {
            id
            name
            username
            profilePicture
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          followerID
          followedID
          followed {
            id
            name
            username
            profilePicture
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      currentPlace {
        id
        name
        address
        coords {
          long
          lat
        }
        events {
          nextToken
        }
        currentPlayers {
          nextToken
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
      }
      userDoc {
        id
        profileID
        email
        expoPushToken
        phoneNumber
        uProfile {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      attendings {
        items {
          id
          profileID
          placeID
          arrivingTime
          departureTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const getUserDoc = /* GraphQL */ `
  query GetUserDoc($id: ID!) {
    getUserDoc(id: $id) {
      createdAt
      expoPushToken
      email
      id
      phoneNumber
      profileID
      uProfile {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      updatedAt
    }
  }
`;
export const listEventChatMessages = /* GraphQL */ `
  query ListEventChatMessages(
    $filter: ModelEventChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventChatMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        body
        createdAt
        eventID
        id
        profileID
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        beginningTime
        createdAt
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        placeID
        privacy
        profilePic
        tags
        updatedAt
      }
      nextToken
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        body
        createdAt
        id
        photo
        profileID
        type
        updatedAt
        eventId
      }
      nextToken
    }
  }
`;
export const getNotificationsByDate = /* GraphQL */ `
  query getNotificationsByDate(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $profileID: ID
  ) {
    getNotificationsByDate(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      profileID: $profileID
    ) {
      items {
        body
        createdAt
        id
        photo
        profileID
        type
        updatedAt
        eventId
      }
      nextToken
    }
  }
`;
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        createdAt
        id
        name
        updatedAt
        events {
          items {
            name
            id
            description
            beginningTime
          }
        }
        coords {
          lat
          long
        }
      }
      nextToken
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        status
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUprofiles = /* GraphQL */ `
  query ListUprofiles(
    $filter: ModelUprofileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUprofiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
        profilePicture
      }
      nextToken
    }
  }
`;
export const listUserDocs = /* GraphQL */ `
  query ListUserDocs(
    $filter: ModelUserDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        expoPushToken
        email
        id
        phoneNumber
        profileID
        updatedAt
      }
      nextToken
    }
  }
`;
