/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const getEventChatMessage = /* GraphQL */ `
  query GetEventChatMessage($id: ID!) {
    getEventChatMessage(id: $id) {
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
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;
export const getUprofile = /* GraphQL */ `
  query GetUprofile($id: ID!) {
    getUprofile(id: $id) {
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
export const getUserDoc = /* GraphQL */ `
  query GetUserDoc($id: ID!) {
    getUserDoc(id: $id) {
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
        event {
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
        eventID
        id
        profileID
        updatedAt
        userProfile {
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
      nextToken
    }
  }
`;
