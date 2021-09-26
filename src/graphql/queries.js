/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
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
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
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
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserDoc = /* GraphQL */ `
  query GetUserDoc($id: ID!) {
    getUserDoc(id: $id) {
      id
      profileID
      email
      deviceToken
      phoneNumber
      uProfile {
        id
        username
        name
        userDocId
        currentPlaceID
        notifications {
          nextToken
        }
        myEvents {
          nextToken
        }
        eventsCreated {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        currentPlace {
          id
          name
          address
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          createdAt
          updatedAt
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        id
        profileID
        email
        deviceToken
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
      nextToken
    }
  }
`;
export const getUprofile = /* GraphQL */ `
  query GetUprofile($id: ID!) {
    getUprofile(id: $id) {
      id
      username
      name
      userDocId
      currentPlaceID
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
        deviceToken
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
export const listUprofiles = /* GraphQL */ `
  query ListUprofiles(
    $filter: ModelUprofileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUprofiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        userDocId
        currentPlaceID
        notifications {
          nextToken
        }
        myEvents {
          nextToken
        }
        eventsCreated {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        currentPlace {
          id
          name
          address
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          createdAt
          updatedAt
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      placeID
      creatorID
      place {
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
      beginningTime
      endingTime
      tags
      creator {
        id
        username
        name
        userDocId
        currentPlaceID
        notifications {
          nextToken
        }
        myEvents {
          nextToken
        }
        eventsCreated {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        currentPlace {
          id
          name
          address
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          createdAt
          updatedAt
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          eventID
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      chat {
        items {
          id
          body
          profileID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      privacy
      profilePic
      eventPictures
      eventVideos
      createdAt
      updatedAt
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
        id
        name
        placeID
        creatorID
        place {
          id
          name
          address
          createdAt
          updatedAt
        }
        beginningTime
        endingTime
        tags
        creator {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        chat {
          nextToken
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
  }
`;
export const getEventChatMessage = /* GraphQL */ `
  query GetEventChatMessage($id: ID!) {
    getEventChatMessage(id: $id) {
      id
      body
      profileID
      eventID
      createdAt
      event {
        id
        name
        placeID
        creatorID
        place {
          id
          name
          address
          createdAt
          updatedAt
        }
        beginningTime
        endingTime
        tags
        creator {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        chat {
          nextToken
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        createdAt
        updatedAt
      }
      userProfile {
        id
        username
        name
        userDocId
        currentPlaceID
        notifications {
          nextToken
        }
        myEvents {
          nextToken
        }
        eventsCreated {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        currentPlace {
          id
          name
          address
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          createdAt
          updatedAt
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
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
        id
        body
        profileID
        eventID
        createdAt
        event {
          id
          name
          placeID
          creatorID
          beginningTime
          endingTime
          tags
          description
          privacy
          profilePic
          eventPictures
          eventVideos
          createdAt
          updatedAt
        }
        userProfile {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      name
      address
      coords {
        long
        lat
      }
      events {
        items {
          id
          name
          placeID
          creatorID
          beginningTime
          endingTime
          tags
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
      currentPlayers {
        items {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        nextToken
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      body
      profileID
      photo
      createdAt
      type
      uProfile {
        id
        username
        name
        userDocId
        currentPlaceID
        notifications {
          nextToken
        }
        myEvents {
          nextToken
        }
        eventsCreated {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        currentPlace {
          id
          name
          address
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          createdAt
          updatedAt
        }
        attendings {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
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
        id
        body
        profileID
        photo
        createdAt
        type
        uProfile {
          id
          username
          name
          userDocId
          currentPlaceID
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
