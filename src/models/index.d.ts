import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NotifType {
  NEW_FOLLOWER = "newFollower",
  EVENT_INVITATION = "eventInvitation",
  FRIEND_PLAYING = "friendPlaying"
}

export enum EventPrivacy {
  PRIVATE = "private",
  PUBLIC = "public"
}

export declare class Coords {
  readonly long: number;
  readonly lat: number;
  constructor(init: ModelInit<Coords>);
}

type UprofileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotificationMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserEventConnectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPlaceConnectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventChatMessageMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserConnectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserDocMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Uprofile {
  readonly id: string;
  readonly username: string;
  readonly name?: string;
  readonly userDocId: string;
  readonly notifications?: (Notification | null)[];
  readonly myEvents?: (UserEventConnection | null)[];
  readonly eventsCreated?: (Event | null)[];
  readonly followers?: (UserConnection | null)[];
  readonly following?: (UserConnection | null)[];
  readonly currentPlace?: Place;
  readonly userDoc?: UserDoc;
  readonly attendings?: (UserPlaceConnection | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Uprofile, UprofileMetaData>);
  static copyOf(source: Uprofile, mutator: (draft: MutableModel<Uprofile, UprofileMetaData>) => MutableModel<Uprofile, UprofileMetaData> | void): Uprofile;
}

export declare class Notification {
  readonly id: string;
  readonly body: string;
  readonly photo?: string;
  readonly createdAt?: string;
  readonly type: NotifType | keyof typeof NotifType;
  readonly uProfile?: Uprofile;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notification, NotificationMetaData>);
  static copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}

export declare class UserEventConnection {
  readonly id: string;
  readonly Event: Event;
  readonly userProfile?: Uprofile;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserEventConnection, UserEventConnectionMetaData>);
  static copyOf(source: UserEventConnection, mutator: (draft: MutableModel<UserEventConnection, UserEventConnectionMetaData>) => MutableModel<UserEventConnection, UserEventConnectionMetaData> | void): UserEventConnection;
}

export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly beginningTime: string;
  readonly endingTime: string;
  readonly tags?: (string | null)[];
  readonly place?: Place;
  readonly creator: Uprofile;
  readonly participants?: (UserEventConnection | null)[];
  readonly chat?: (EventChatMessage | null)[];
  readonly description: string;
  readonly privacy: EventPrivacy | keyof typeof EventPrivacy;
  readonly profilePic?: string;
  readonly eventPictures?: (string | null)[];
  readonly eventVideos?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly coords: Coords;
  readonly events?: (Event | null)[];
  readonly currentPlayers?: (Uprofile | null)[];
  readonly attendings?: (UserPlaceConnection | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class UserPlaceConnection {
  readonly id: string;
  readonly arrivingTime: string;
  readonly departureTime?: string;
  readonly uProfile?: Uprofile;
  readonly place?: Place;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserPlaceConnection, UserPlaceConnectionMetaData>);
  static copyOf(source: UserPlaceConnection, mutator: (draft: MutableModel<UserPlaceConnection, UserPlaceConnectionMetaData>) => MutableModel<UserPlaceConnection, UserPlaceConnectionMetaData> | void): UserPlaceConnection;
}

export declare class EventChatMessage {
  readonly id: string;
  readonly body: string;
  readonly createdAt?: string;
  readonly event?: Event;
  readonly userProfile?: Uprofile;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EventChatMessage, EventChatMessageMetaData>);
  static copyOf(source: EventChatMessage, mutator: (draft: MutableModel<EventChatMessage, EventChatMessageMetaData>) => MutableModel<EventChatMessage, EventChatMessageMetaData> | void): EventChatMessage;
}

export declare class UserConnection {
  readonly id: string;
  readonly follower?: Uprofile;
  readonly followed?: Uprofile;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserConnection, UserConnectionMetaData>);
  static copyOf(source: UserConnection, mutator: (draft: MutableModel<UserConnection, UserConnectionMetaData>) => MutableModel<UserConnection, UserConnectionMetaData> | void): UserConnection;
}

export declare class UserDoc {
  readonly id: string;
  readonly email: string;
  readonly deviceToken?: string;
  readonly phoneNumber?: string;
  readonly uProfile?: Uprofile;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserDoc, UserDocMetaData>);
  static copyOf(source: UserDoc, mutator: (draft: MutableModel<UserDoc, UserDocMetaData>) => MutableModel<UserDoc, UserDocMetaData> | void): UserDoc;
}