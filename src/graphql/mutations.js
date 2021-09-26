/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserDoc = /* GraphQL */ `
  mutation CreateUserDoc(
    $input: CreateUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    createUserDoc(input: $input, condition: $condition) {
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
export const updateUserDoc = /* GraphQL */ `
  mutation UpdateUserDoc(
    $input: UpdateUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    updateUserDoc(input: $input, condition: $condition) {
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
export const deleteUserDoc = /* GraphQL */ `
  mutation DeleteUserDoc(
    $input: DeleteUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    deleteUserDoc(input: $input, condition: $condition) {
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
export const createUprofile = /* GraphQL */ `
  mutation CreateUprofile(
    $input: CreateUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    createUprofile(input: $input, condition: $condition) {
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
export const updateUprofile = /* GraphQL */ `
  mutation UpdateUprofile(
    $input: UpdateUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    updateUprofile(input: $input, condition: $condition) {
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
export const deleteUprofile = /* GraphQL */ `
  mutation DeleteUprofile(
    $input: DeleteUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    deleteUprofile(input: $input, condition: $condition) {
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
export const createUserConnection = /* GraphQL */ `
  mutation CreateUserConnection(
    $input: CreateUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    createUserConnection(input: $input, condition: $condition) {
      id
      followerID
      followedID
      follower {
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
      followed {
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
export const updateUserConnection = /* GraphQL */ `
  mutation UpdateUserConnection(
    $input: UpdateUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    updateUserConnection(input: $input, condition: $condition) {
      id
      followerID
      followedID
      follower {
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
      followed {
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
export const deleteUserConnection = /* GraphQL */ `
  mutation DeleteUserConnection(
    $input: DeleteUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    deleteUserConnection(input: $input, condition: $condition) {
      id
      followerID
      followedID
      follower {
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
      followed {
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
export const createUserPlaceConnection = /* GraphQL */ `
  mutation CreateUserPlaceConnection(
    $input: CreateUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    createUserPlaceConnection(input: $input, condition: $condition) {
      id
      profileID
      placeID
      arrivingTime
      departureTime
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPlaceConnection = /* GraphQL */ `
  mutation UpdateUserPlaceConnection(
    $input: UpdateUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    updateUserPlaceConnection(input: $input, condition: $condition) {
      id
      profileID
      placeID
      arrivingTime
      departureTime
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPlaceConnection = /* GraphQL */ `
  mutation DeleteUserPlaceConnection(
    $input: DeleteUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    deleteUserPlaceConnection(input: $input, condition: $condition) {
      id
      profileID
      placeID
      arrivingTime
      departureTime
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
      createdAt
      updatedAt
    }
  }
`;
export const createUserEventConnection = /* GraphQL */ `
  mutation CreateUserEventConnection(
    $input: CreateUserEventConnectionInput!
    $condition: ModelUserEventConnectionConditionInput
  ) {
    createUserEventConnection(input: $input, condition: $condition) {
      id
      eventID
      profileID
      Event {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUserEventConnection = /* GraphQL */ `
  mutation UpdateUserEventConnection(
    $input: UpdateUserEventConnectionInput!
    $condition: ModelUserEventConnectionConditionInput
  ) {
    updateUserEventConnection(input: $input, condition: $condition) {
      id
      eventID
      profileID
      Event {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserEventConnection = /* GraphQL */ `
  mutation DeleteUserEventConnection(
    $input: DeleteUserEventConnectionInput!
    $condition: ModelUserEventConnectionConditionInput
  ) {
    deleteUserEventConnection(input: $input, condition: $condition) {
      id
      eventID
      profileID
      Event {
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
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createEventChatMessage = /* GraphQL */ `
  mutation CreateEventChatMessage(
    $input: CreateEventChatMessageInput!
    $condition: ModelEventChatMessageConditionInput
  ) {
    createEventChatMessage(input: $input, condition: $condition) {
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
export const updateEventChatMessage = /* GraphQL */ `
  mutation UpdateEventChatMessage(
    $input: UpdateEventChatMessageInput!
    $condition: ModelEventChatMessageConditionInput
  ) {
    updateEventChatMessage(input: $input, condition: $condition) {
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
export const deleteEventChatMessage = /* GraphQL */ `
  mutation DeleteEventChatMessage(
    $input: DeleteEventChatMessageInput!
    $condition: ModelEventChatMessageConditionInput
  ) {
    deleteEventChatMessage(input: $input, condition: $condition) {
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
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
