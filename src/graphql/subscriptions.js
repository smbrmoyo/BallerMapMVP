/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserDoc = /* GraphQL */ `
  subscription OnCreateUserDoc {
    onCreateUserDoc {
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
export const onUpdateUserDoc = /* GraphQL */ `
  subscription OnUpdateUserDoc {
    onUpdateUserDoc {
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
export const onDeleteUserDoc = /* GraphQL */ `
  subscription OnDeleteUserDoc {
    onDeleteUserDoc {
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
export const onCreateUprofile = /* GraphQL */ `
  subscription OnCreateUprofile {
    onCreateUprofile {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onUpdateUprofile = /* GraphQL */ `
  subscription OnUpdateUprofile {
    onUpdateUprofile {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onDeleteUprofile = /* GraphQL */ `
  subscription OnDeleteUprofile {
    onDeleteUprofile {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onCreateUserConnection = /* GraphQL */ `
  subscription OnCreateUserConnection {
    onCreateUserConnection {
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
export const onUpdateUserConnection = /* GraphQL */ `
  subscription OnUpdateUserConnection {
    onUpdateUserConnection {
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
export const onDeleteUserConnection = /* GraphQL */ `
  subscription OnDeleteUserConnection {
    onDeleteUserConnection {
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
export const onCreateUserPlaceConnection = /* GraphQL */ `
  subscription OnCreateUserPlaceConnection {
    onCreateUserPlaceConnection {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onUpdateUserPlaceConnection = /* GraphQL */ `
  subscription OnUpdateUserPlaceConnection {
    onUpdateUserPlaceConnection {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onDeleteUserPlaceConnection = /* GraphQL */ `
  subscription OnDeleteUserPlaceConnection {
    onDeleteUserPlaceConnection {
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
          id
          long
          lat
          createdAt
          updatedAt
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
export const onCreateUserEventConnection = /* GraphQL */ `
  subscription OnCreateUserEventConnection {
    onCreateUserEventConnection {
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
export const onUpdateUserEventConnection = /* GraphQL */ `
  subscription OnUpdateUserEventConnection {
    onUpdateUserEventConnection {
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
export const onDeleteUserEventConnection = /* GraphQL */ `
  subscription OnDeleteUserEventConnection {
    onDeleteUserEventConnection {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      name
      placeID
      creatorID
      place {
        id
        name
        address
        coords {
          id
          long
          lat
          createdAt
          updatedAt
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      name
      placeID
      creatorID
      place {
        id
        name
        address
        coords {
          id
          long
          lat
          createdAt
          updatedAt
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      name
      placeID
      creatorID
      place {
        id
        name
        address
        coords {
          id
          long
          lat
          createdAt
          updatedAt
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
export const onCreateEventChatMessage = /* GraphQL */ `
  subscription OnCreateEventChatMessage {
    onCreateEventChatMessage {
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
export const onUpdateEventChatMessage = /* GraphQL */ `
  subscription OnUpdateEventChatMessage {
    onUpdateEventChatMessage {
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
export const onDeleteEventChatMessage = /* GraphQL */ `
  subscription OnDeleteEventChatMessage {
    onDeleteEventChatMessage {
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
      id
      name
      address
      coords {
        id
        long
        lat
        createdAt
        updatedAt
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
      id
      name
      address
      coords {
        id
        long
        lat
        createdAt
        updatedAt
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
      id
      name
      address
      coords {
        id
        long
        lat
        createdAt
        updatedAt
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateCoords = /* GraphQL */ `
  subscription OnCreateCoords {
    onCreateCoords {
      id
      long
      lat
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCoords = /* GraphQL */ `
  subscription OnUpdateCoords {
    onUpdateCoords {
      id
      long
      lat
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCoords = /* GraphQL */ `
  subscription OnDeleteCoords {
    onDeleteCoords {
      id
      long
      lat
      createdAt
      updatedAt
    }
  }
`;
