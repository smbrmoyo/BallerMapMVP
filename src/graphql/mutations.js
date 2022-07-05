/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttendance = /* GraphQL */ `
  mutation CreateAttendance(
    $condition: ModelUserPlaceConnectionConditionInput
    $input: CreateUserPlaceConnectionInput!
  ) {
    createAttendance(condition: $condition, input: $input) {
      data {
        arrivingTime
        createdAt
        departureTime
        id
        placeID
        profileID
        updatedAt
      }
      statusCode
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $condition: ModelEventConditionInput
    $input: CreateEventInput!
  ) {
    createEvent(condition: $condition, input: $input) {
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
      status
      profilePic
      tags
      updatedAt
    }
  }
`;
export const createEventChatMessage = /* GraphQL */ `
  mutation CreateEventChatMessage(
    $condition: ModelEventChatMessageConditionInput
    $input: CreateEventChatMessageInput!
  ) {
    createEventChatMessage(condition: $condition, input: $input) {
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
export const createEvent_c = /* GraphQL */ `
  mutation CreateEvent_c(
    $condition: ModelEventConditionInput
    $input: CreateEventInput_c!
  ) {
    createEvent_c(condition: $condition, input: $input) {
      data {
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
      statusCode
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $condition: ModelNotificationConditionInput
    $input: CreateNotificationInput!
  ) {
    createNotification(condition: $condition, input: $input) {
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
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $condition: ModelPlaceConditionInput
    $input: CreatePlaceInput!
  ) {
    createPlace(condition: $condition, input: $input) {
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
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: CreatePrivateNoteInput!
  ) {
    createPrivateNote(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $condition: ModelTaskConditionInput
    $input: CreateTaskInput!
  ) {
    createTask(condition: $condition, input: $input) {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const createUprofile = /* GraphQL */ `
  mutation CreateUprofile(
    $condition: ModelUprofileConditionInput
    $input: CreateUprofileInput!
  ) {
    createUprofile(condition: $condition, input: $input) {
      attendings {
        nextToken
      }
      createdAt
      cityCountry
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
      profilePicture
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
export const createUserConnection = /* GraphQL */ `
  mutation CreateUserConnection(
    $condition: ModelUserConnectionConditionInput
    $input: CreateUserConnectionInput!
  ) {
    createUserConnection(condition: $condition, input: $input) {
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
export const createUserDoc = /* GraphQL */ `
  mutation CreateUserDoc(
    $condition: ModelUserDocConditionInput
    $input: CreateUserDocInput!
  ) {
    createUserDoc(condition: $condition, input: $input) {
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
export const createUserEventConnection = /* GraphQL */ `
  mutation CreateUserEventConnection(
    $condition: ModelUserEventConnectionConditionInput
    $input: CreateUserEventConnectionInput!
  ) {
    createUserEventConnection(condition: $condition, input: $input) {
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
export const createUserPlaceConnection = /* GraphQL */ `
  mutation CreateUserPlaceConnection(
    $condition: ModelUserPlaceConnectionConditionInput
    $input: CreateUserPlaceConnectionInput!
  ) {
    createUserPlaceConnection(condition: $condition, input: $input) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $condition: ModelEventConditionInput
    $input: DeleteEventInput!
  ) {
    deleteEvent(condition: $condition, input: $input) {
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
export const deleteEventChatMessage = /* GraphQL */ `
  mutation DeleteEventChatMessage(
    $condition: ModelEventChatMessageConditionInput
    $input: DeleteEventChatMessageInput!
  ) {
    deleteEventChatMessage(condition: $condition, input: $input) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $condition: ModelNotificationConditionInput
    $input: DeleteNotificationInput!
  ) {
    deleteNotification(condition: $condition, input: $input) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $condition: ModelPlaceConditionInput
    $input: DeletePlaceInput!
  ) {
    deletePlace(condition: $condition, input: $input) {
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
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: DeletePrivateNoteInput!
  ) {
    deletePrivateNote(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $condition: ModelTaskConditionInput
    $input: DeleteTaskInput!
  ) {
    deleteTask(condition: $condition, input: $input) {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const deleteUprofile = /* GraphQL */ `
  mutation DeleteUprofile(
    $condition: ModelUprofileConditionInput
    $input: DeleteUprofileInput!
  ) {
    deleteUprofile(condition: $condition, input: $input) {
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
export const deleteUserConnection = /* GraphQL */ `
  mutation DeleteUserConnection(
    $condition: ModelUserConnectionConditionInput
    $input: DeleteUserConnectionInput!
  ) {
    deleteUserConnection(condition: $condition, input: $input) {
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
export const deleteUserDoc = /* GraphQL */ `
  mutation DeleteUserDoc(
    $condition: ModelUserDocConditionInput
    $input: DeleteUserDocInput!
  ) {
    deleteUserDoc(condition: $condition, input: $input) {
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
export const deleteUserEventConnection = /* GraphQL */ `
  mutation DeleteUserEventConnection(
    $condition: ModelUserEventConnectionConditionInput
    $input: DeleteUserEventConnectionInput!
  ) {
    deleteUserEventConnection(condition: $condition, input: $input) {
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
export const deleteUserPlaceConnection = /* GraphQL */ `
  mutation DeleteUserPlaceConnection(
    $condition: ModelUserPlaceConnectionConditionInput
    $input: DeleteUserPlaceConnectionInput!
  ) {
    deleteUserPlaceConnection(condition: $condition, input: $input) {
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
export const followUser = /* GraphQL */ `
  mutation FollowUser(
    $condition: ModelUserConnectionConditionInput
    $input: CreateUserConnectionInput!
  ) {
    followUser(condition: $condition, input: $input) {
      data {
        createdAt
        followedID
        followerID
        id
        updatedAt
      }
      statusCode
    }
  }
`;
export const updateCurrentPlace = /* GraphQL */ `
  mutation UpdateCurrentPlace(
    $condition: ModelUprofileConditionInput
    $input: UpdateUprofileInput!
  ) {
    updateCurrentPlace(condition: $condition, input: $input) {
      data {
        createdAt
        currentPlaceID
        id
        name
        updatedAt
        userDocId
        username
      }
      statusCode
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $condition: ModelEventConditionInput
    $input: UpdateEventInput!
  ) {
    updateEvent(condition: $condition, input: $input) {
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
export const updateEventChatMessage = /* GraphQL */ `
  mutation UpdateEventChatMessage(
    $condition: ModelEventChatMessageConditionInput
    $input: UpdateEventChatMessageInput!
  ) {
    updateEventChatMessage(condition: $condition, input: $input) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $condition: ModelNotificationConditionInput
    $input: UpdateNotificationInput!
  ) {
    updateNotification(condition: $condition, input: $input) {
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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $condition: ModelPlaceConditionInput
    $input: UpdatePlaceInput!
  ) {
    updatePlace(condition: $condition, input: $input) {
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
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: UpdatePrivateNoteInput!
  ) {
    updatePrivateNote(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $condition: ModelTaskConditionInput
    $input: UpdateTaskInput!
  ) {
    updateTask(condition: $condition, input: $input) {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const updateUprofile = /* GraphQL */ `
  mutation UpdateUprofile(
    $condition: ModelUprofileConditionInput
    $input: UpdateUprofileInput!
  ) {
    updateUprofile(condition: $condition, input: $input) {
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
export const updateUserConnection = /* GraphQL */ `
  mutation UpdateUserConnection(
    $condition: ModelUserConnectionConditionInput
    $input: UpdateUserConnectionInput!
  ) {
    updateUserConnection(condition: $condition, input: $input) {
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
export const updateUserDoc = /* GraphQL */ `
  mutation UpdateUserDoc(
    $condition: ModelUserDocConditionInput
    $input: UpdateUserDocInput!
  ) {
    updateUserDoc(condition: $condition, input: $input) {
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
export const updateUserEventConnection = /* GraphQL */ `
  mutation UpdateUserEventConnection(
    $condition: ModelUserEventConnectionConditionInput
    $input: UpdateUserEventConnectionInput!
  ) {
    updateUserEventConnection(condition: $condition, input: $input) {
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
export const updateUserPlaceConnection = /* GraphQL */ `
  mutation UpdateUserPlaceConnection(
    $condition: ModelUserPlaceConnectionConditionInput
    $input: UpdateUserPlaceConnectionInput!
  ) {
    updateUserPlaceConnection(condition: $condition, input: $input) {
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
