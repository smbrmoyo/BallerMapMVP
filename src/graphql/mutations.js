/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $condition: ModelEventConditionInput
    $input: CreateEventInput!
  ) {
    createEvent(condition: $condition, input: $input) {
      beginningTime
      chat {
        items {
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
        nextToken
      }
      createdAt
      creator {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      place {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
      body
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
      uProfile {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      coords {
        lat
        long
      }
      createdAt
      currentPlayers {
        items {
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
        nextToken
      }
      events {
        items {
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
        items {
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
        nextToken
      }
      createdAt
      currentPlace {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      currentPlaceID
      eventsCreated {
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      following {
        items {
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
        nextToken
      }
      id
      myEvents {
        items {
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
        nextToken
      }
      name
      notifications {
        items {
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
        uProfile {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        userDocId
        username
      }
      followedID
      follower {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      placeID
      profileID
      uProfile {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      createdAt
      creator {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      place {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      coords {
        lat
        long
      }
      createdAt
      currentPlayers {
        items {
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
        nextToken
      }
      events {
        items {
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
        items {
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
        nextToken
      }
      createdAt
      currentPlace {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      currentPlaceID
      eventsCreated {
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      following {
        items {
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
        nextToken
      }
      id
      myEvents {
        items {
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
        nextToken
      }
      name
      notifications {
        items {
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
        uProfile {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        userDocId
        username
      }
      followedID
      follower {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      placeID
      profileID
      uProfile {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        userDocId
        username
      }
      updatedAt
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
        items {
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
        nextToken
      }
      createdAt
      creator {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      place {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        items {
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
        nextToken
      }
      coords {
        lat
        long
      }
      createdAt
      currentPlayers {
        items {
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
        nextToken
      }
      events {
        items {
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
      attendings {
        items {
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
        nextToken
      }
      createdAt
      currentPlace {
        address
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      currentPlaceID
      eventsCreated {
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      following {
        items {
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
        nextToken
      }
      id
      myEvents {
        items {
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
        nextToken
      }
      name
      notifications {
        items {
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
        uProfile {
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
        updatedAt
      }
      userDocId
      username
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        userDocId
        username
      }
      followedID
      follower {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        chat {
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
        createdAt
        creator {
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
        creatorID
        description
        endingTime
        eventPictures
        eventVideos
        id
        name
        participants {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        place {
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        coords {
          lat
          long
        }
        createdAt
        currentPlayers {
          items {
            createdAt
            currentPlaceID
            id
            name
            updatedAt
            userDocId
            username
          }
          nextToken
        }
        events {
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
        id
        name
        updatedAt
      }
      placeID
      profileID
      uProfile {
        attendings {
          items {
            arrivingTime
            createdAt
            departureTime
            id
            placeID
            profileID
            updatedAt
          }
          nextToken
        }
        createdAt
        currentPlace {
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
        currentPlaceID
        eventsCreated {
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
        followers {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        following {
          items {
            createdAt
            followedID
            followerID
            id
            updatedAt
          }
          nextToken
        }
        id
        myEvents {
          items {
            createdAt
            eventID
            id
            profileID
            updatedAt
          }
          nextToken
        }
        name
        notifications {
          items {
            body
            createdAt
            id
            photo
            profileID
            type
            updatedAt
          }
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
        userDocId
        username
      }
      updatedAt
    }
  }
`;
