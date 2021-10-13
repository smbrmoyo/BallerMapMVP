/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      myEvents {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      followers {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      myEvents {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      followers {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      myEvents {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      followers {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followerID
          followedID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          long
          lat
        }
        events {
          nextToken
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chat {
        items {
          id
          body
          profileID
          eventID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      privacy
      profilePic
      eventPictures
      eventVideos
      _version
      _deleted
      _lastChangedAt
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
          long
          lat
        }
        events {
          nextToken
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chat {
        items {
          id
          body
          profileID
          eventID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      privacy
      profilePic
      eventPictures
      eventVideos
      _version
      _deleted
      _lastChangedAt
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
          long
          lat
        }
        events {
          nextToken
          startedAt
        }
        currentPlayers {
          nextToken
          startedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      participants {
        items {
          id
          eventID
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chat {
        items {
          id
          body
          profileID
          eventID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      privacy
      profilePic
      eventPictures
      eventVideos
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        participants {
          nextToken
          startedAt
        }
        chat {
          nextToken
          startedAt
        }
        description
        privacy
        profilePic
        eventPictures
        eventVideos
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      currentPlayers {
        items {
          id
          username
          name
          userDocId
          currentPlaceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attendings {
        items {
          id
          profileID
          placeID
          arrivingTime
          departureTime
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      currentPlayers {
        items {
          id
          username
          name
          userDocId
          currentPlaceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attendings {
        items {
          id
          profileID
          placeID
          arrivingTime
          departureTime
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      currentPlayers {
        items {
          id
          username
          name
          userDocId
          currentPlaceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attendings {
        items {
          id
          profileID
          placeID
          arrivingTime
          departureTime
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        myEvents {
          nextToken
          startedAt
        }
        eventsCreated {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        currentPlace {
          id
          name
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userDoc {
          id
          profileID
          email
          deviceToken
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attendings {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
