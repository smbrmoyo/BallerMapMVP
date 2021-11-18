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
  subscription OnCreateNotification($profileID: ID!) {
    onCreateNotification(profileID: $profileID) {
      body
      profileID
      id
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
  subscription OnCreateUprofile {
    onCreateUprofile {
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
        deviceToken
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
  subscription OnCreateUserConnection {
    onCreateUserConnection {
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
      deviceToken
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
  subscription OnCreateUserEventConnection($profileID: ID!) {
    onCreateUserEventConnection(profileID: $profileID) {
      userProfile {
        myEvents {
          items {
            Event {
              id
              name
              place {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
export const onCreateUserPlaceConnection = /* GraphQL */ `
  subscription OnCreateUserPlaceConnection {
    onCreateUserPlaceConnection {
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
  subscription OnDeleteEvent {
    onDeleteEvent {
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
  subscription OnDeleteNotification {
    onDeleteNotification {
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
        deviceToken
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
  subscription OnDeleteUserConnection {
    onDeleteUserConnection {
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
      deviceToken
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
  subscription OnUpdateEvent {
    onUpdateEvent {
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
  subscription OnUpdateUprofile($id: ID) {
    onUpdateUprofile(id: $id) {
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
        deviceToken
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
      deviceToken
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
