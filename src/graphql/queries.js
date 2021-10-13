/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const uProfiles = /* GraphQL */ `
  query UProfiles {
    uProfiles {
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
export const eventProfiles = /* GraphQL */ `
  query EventProfiles {
    eventProfiles {
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
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateNotes = /* GraphQL */ `
  query SyncPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserDocs = /* GraphQL */ `
  query SyncUserDocs(
    $filter: ModelUserDocFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDocs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUprofiles = /* GraphQL */ `
  query SyncUprofiles(
    $filter: ModelUprofileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUprofiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserConnections = /* GraphQL */ `
  query SyncUserConnections(
    $filter: ModelUserConnectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        followerID
        followedID
        follower {
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
        followed {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserPlaceConnections = /* GraphQL */ `
  query SyncUserPlaceConnections(
    $filter: ModelUserPlaceConnectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPlaceConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserEventConnections = /* GraphQL */ `
  query SyncUserEventConnections(
    $filter: ModelUserEventConnectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserEventConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventID
        profileID
        Event {
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
        userProfile {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncEventChatMessages = /* GraphQL */ `
  query SyncEventChatMessages(
    $filter: ModelEventChatMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventChatMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
