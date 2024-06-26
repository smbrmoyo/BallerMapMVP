/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
      participants {
        nextToken
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
      profilePic
      tags
      updatedAt
    }
  }
`;
export const onCreateEventChatMessage = /* GraphQL */ `
  subscription OnCreateEventChatMessage {
    onCreateEventChatMessage {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification($id: ID!) {
    onCreateNotification(id: $id) {
      body
      createdAt
      id
      photo
      profileID
      type
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const onCreateUprofile = /* GraphQL */ `
  subscription OnCreateUprofile($id: ID!) {
    onCreateUprofile(id: $id) {
      attendings {
        nextToken
      }
      createdAt
      currentPlace {
        address
        createdAt
        id
        name
        updatedAt
      }
      currentPlaceID
      eventsCreated {
        nextToken
      }
      followers {
        nextToken
      }
      following {
        nextToken
      }
      id
      myEvents {
        nextToken
      }
      name
      notifications {
        nextToken
      }
      updatedAt
      userDoc {
        createdAt
        expoPushToken
        devicePushToken
        email
        id
        phoneNumber
        profileID
        updatedAt
      }
      userDocId
      username
    }
  }
`;
export const onCreateUserConnection = /* GraphQL */ `
  subscription OnCreateUserConnection($id: ID!) {
    onCreateUserConnection(id: $id) {
      createdAt
      followed {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followedID
      follower {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followerID
      id
      updatedAt
    }
  }
`;
export const onCreateUserDoc = /* GraphQL */ `
  subscription OnCreateUserDoc {
    onCreateUserDoc {
      createdAt
      expoPushToken
      devicePushToken
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
export const onCreateUserEventConnection = /* GraphQL */ `
  subscription OnCreateUserEventConnection($id: ID!) {
    onCreateUserEventConnection(id: $id) {
      Event {
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
      createdAt
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
export const onCreateUserPlaceConnection = /* GraphQL */ `
  subscription OnCreateUserPlaceConnection($id: ID!) {
    onCreateUserPlaceConnection(id: $id) {
      arrivingTime
      createdAt
      departureTime
      id
      place {
        address
        createdAt
        id
        name
        updatedAt
      }
      placeID
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($id: ID!) {
    onDeleteEvent(id: $id) {
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
      participants {
        nextToken
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
      profilePic
      tags
      updatedAt
    }
  }
`;
export const onDeleteEventChatMessage = /* GraphQL */ `
  subscription OnDeleteEventChatMessage {
    onDeleteEventChatMessage {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification($id: ID!) {
    onDeleteNotification(id: $id) {
      body
      createdAt
      id
      photo
      profileID
      type
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
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
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const onDeleteUprofile = /* GraphQL */ `
  subscription OnDeleteUprofile {
    onDeleteUprofile {
      attendings {
        nextToken
      }
      createdAt
      currentPlace {
        address
        createdAt
        id
        name
        updatedAt
      }
      currentPlaceID
      eventsCreated {
        nextToken
      }
      followers {
        nextToken
      }
      following {
        nextToken
      }
      id
      myEvents {
        nextToken
      }
      name
      notifications {
        nextToken
      }
      updatedAt
      userDoc {
        createdAt
        expoPushToken
        devicePushToken
        email
        id
        phoneNumber
        profileID
        updatedAt
      }
      userDocId
      username
    }
  }
`;
export const onDeleteUserConnection = /* GraphQL */ `
  subscription OnDeleteUserConnection($id: ID!) {
    onDeleteUserConnection(id: $id) {
      createdAt
      followed {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followedID
      follower {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followerID
      id
      updatedAt
    }
  }
`;
export const onDeleteUserDoc = /* GraphQL */ `
  subscription OnDeleteUserDoc {
    onDeleteUserDoc {
      createdAt
      expoPushToken
      devicePushToken
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
export const onDeleteUserEventConnection = /* GraphQL */ `
  subscription OnDeleteUserEventConnection {
    onDeleteUserEventConnection {
      Event {
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
      createdAt
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
export const onDeleteUserPlaceConnection = /* GraphQL */ `
  subscription OnDeleteUserPlaceConnection {
    onDeleteUserPlaceConnection {
      arrivingTime
      createdAt
      departureTime
      id
      place {
        address
        createdAt
        id
        name
        updatedAt
      }
      placeID
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($id: ID!) {
    onUpdateEvent(id: $id) {
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
      participants {
        nextToken
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
      profilePic
      tags
      updatedAt
    }
  }
`;
export const onUpdateEventChatMessage = /* GraphQL */ `
  subscription OnUpdateEventChatMessage {
    onUpdateEventChatMessage {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
      body
      createdAt
      id
      photo
      profileID
      type
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
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
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const onUpdateUprofile = /* GraphQL */ `
  subscription OnUpdateUprofile($id: ID!) {
    onUpdateUprofile(id: $id) {
      id
      username
      name
      profilePicture
      userDocId
      cityCountry
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
        devicePushToken
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
export const onUpdateUserConnection = /* GraphQL */ `
  subscription OnUpdateUserConnection {
    onUpdateUserConnection {
      createdAt
      followed {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followedID
      follower {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      followerID
      id
      updatedAt
    }
  }
`;
export const onUpdateUserDoc = /* GraphQL */ `
  subscription OnUpdateUserDoc {
    onUpdateUserDoc {
      createdAt
      expoPushToken
      devicePushToken
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
export const onUpdateUserEventConnection = /* GraphQL */ `
  subscription OnUpdateUserEventConnection {
    onUpdateUserEventConnection {
      Event {
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
      createdAt
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
export const onUpdateUserPlaceConnection = /* GraphQL */ `
  subscription OnUpdateUserPlaceConnection {
    onUpdateUserPlaceConnection {
      arrivingTime
      createdAt
      departureTime
      id
      place {
        address
        createdAt
        id
        name
        updatedAt
      }
      placeID
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
