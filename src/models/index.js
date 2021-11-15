// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotifType = {
  "NEW_FOLLOWER": "newFollower",
  "EVENT_INVITATION": "eventInvitation",
  "FRIEND_PLAYING": "friendPlaying"
};

const EventPrivacy = {
  "PRIVATE": "private",
  "PUBLIC": "public"
};

const { Uprofile, Notification, UserEventConnection, Event, EventChatMessage, UserConnection, Place, UserPlaceConnection, UserDoc, Coords } = initSchema(schema);

export {
  Uprofile,
  Notification,
  UserEventConnection,
  Event,
  EventChatMessage,
  UserConnection,
  Place,
  UserPlaceConnection,
  UserDoc,
  NotifType,
  EventPrivacy,
  Coords
};