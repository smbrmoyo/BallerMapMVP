
const {createEvent,
  createUserEventConnection,
  createNotification,
  updateUserProfile,
  createUserConnection,
} = require('./mutations');

const {AWSAppSyncClient} = require('aws-appsync');
require('cross-fetch/polyfill');
const {createUserPlaceConnection} = require("./mutations");

const graphqlClient = new AWSAppSyncClient({
  url: "https://x57k3rvgs5dh5njkuwx2fej7je.appsync-api.us-east-2.amazonaws.com/graphql",
  region: "us-east-2",
  auth: {
    type: 'AWS_IAM',
    credentials: {
      accessKeyId: 'AKIAZ2KSDGKQ7ORHRJXH',
      secretAccessKey: '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',
    }
  },
  disableOffline: true
});

module.exports = {
  createEventResolver: createEventRes,
  createUserPlaceConnectionResolver: createAttendanceRes,
  createUserCurrentPlaceResolver: createUserCurrentPlaceRes,
  createUserConnectionResolver: createUserConnectionRes
}

/**
 *
 * @param ctx
 * Create Event doc and userEventConnection docs
 * @returns {Promise<void>}
 */
async function createEventRes(ctx){
  // Create Event doc
  let advance = false
  let createdEvent = {
    id: "",
    name: "",
    creator: {username: ""},
    place: {name: ""}
  }
  await graphqlClient.mutate({
    mutation: createEvent,
    variables:{
      input: {
        name: ctx.input.name,
        placeID: ctx.input.placeID,
        creatorID: ctx.input.creatorID, //email du currentUser
        beginningTime: ctx.input.beginningTime,
        endingTime: ctx.input.endingTime,
        tags: ctx.input.tags,
        description: ctx.input.description,
        privacy: "public"
      }
    }
  }).then(result => {
    console.log("Event Created ----------> ", result.data.createEvent)
    createdEvent = result.data.createEvent;
    advance = true
  }).catch(error => {
    console.log("Erreur dans la mutation create Event ---------->", JSON.stringify(error));
    throw JSON.stringify(error);
  })

  if(advance) {
    let participants = ctx.input.participants
    for (let participantID in participants) {
      console.log(participants[participantID]);
      await graphqlClient.mutate({
        mutation: createUserEventConnection,
        variables: {
          input: {
            eventID: createdEvent.id,
            profileID: participants[participantID]
          }
        }
      }).then(res => {
        console.log(
          `${res.data.createUserEventConnection.userProfile.username} added to ${res.data.createUserEventConnection.Event.name} Event`);
      }).catch(err => {
        console.log(
            `Error in mutation createUserEventConnection, adding user ${participants[participantID]} to event ${createdEvent.id} -------------> ${err}`
        );
        throw `Error adding user ${participantID} to event ${createdEvent.id} -------------> ${JSON.stringify(err)}`;
      })
      //send Notification to participant
      await graphqlClient.mutate({
        mutation: createNotification,
        variables:{
          input: {
            type: "eventInvitation",
            profileID: participants[participantID],
            body: `${createdEvent.creator.username} vous a invité à une partie`
          }
        }
      }).then(result => {
        console.log(`${result.data.createNotification.type} notification sent to user ${participants[participantID]}` )
      })
    }
  }


  if(advance){
    console.log("  Request Successful !!!!!")
    return createdEvent;
  } else{
    console.log("Request UnSuccessful !!!!!")
  }

}
async function stringifyTime(hours, minutes){
  if(hours.length == 1){
    hours = `0${hours}`;
  }
  if(minutes.length == 1){
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`
}

async function createAttendanceRes(ctx) {
  let createdAttendance;
  let followers;
  let attendant; // USERNAME OF THE CURRENT USER
  let place;
  let ctxInput;
  if (ctx.input.departureTime != "null") {
    ctxInput = {
      profileID: ctx.input.profileID,
      placeID: ctx.input.placeID,
      arrivingTime: ctx.input.arrivingTime
    };
  } else {
    ctxInput = {
      profileID: ctx.input.profileID,
      placeID: ctx.input.placeID,
      arrivingTime: ctx.input.arrivingTime,
      departureTime: ctx.input.departureTime
    }
  }
  await graphqlClient.mutate({
    mutation: createUserPlaceConnection,
    variables: {
      input: ctxInput
    }
  }).then(res => {
    attendant = res.createUserPlaceConnection.uProfile.username;
    followers = res.createUserPlaceConnection.uProfile.followers.items;
    place = res.createUserPlaceConnection.place.name;
    createdAttendance = {
      place: res.createUserPlaceConnection.place.name,
      placeID: res.createUserPlaceConnection.placeID,
      arrivingTime: res.createUserPlaceConnection.arrivingTime,
      departureTime: res.createUserPlaceConnection.departureTime
    };
    console.log("   Attendance successfully created by ", res.createUserPlaceConnection.profileID, "to", place);
  }).catch(error => {
    console.log("  !!!ERROR creating the userPlaceConnection record", JSON.stringify(error));
    throw JSON.stringify(error);
  })
  const attendingDate = Date.parse(ctx.input.arrivingTime)
  const today = new Date();
  let advance = true;
  let jour;
  const date = "le " + attendingDate.getDate();
  let mois;
  let annee = attendingDate.getFullYear()
  let time = stringifyTime(attendingDate.getHours(), attendingDate.getMinutes())
  let notificationBody;
  switch (attendingDate.getDay()) {

    case today.getDay():
      if (attendingDate.getMonth() == today.getMonth() && attendingDate.getFullYear() == today.getFullYear()) {
        notificationBody = `${attendant} va jouer à ${place} aujourd'hui à ${time}`;
        advance = false;
        break;
      };

    case 0:
      jour = "Dimanche ";
    case 1:
      jour = "Lundi ";
    case 2:
      jour = "Mardi ";
    case 3:
      jour = "Mercredi ";
    case 4:
      jour = "Jeudi ";
    case 5:
      jour = "Vendredi ";
    case 6:
      jour = "Samedi ";
  }

  if (advance) {
    switch (attendingDate.getMonth()) {
      case 0:
        mois = "Janvier ";
      case 1:
        mois = "Février ";
      case 2:
        mois = "Mars ";
      case 3:
        mois = "Avril ";
      case 4:
        mois = "Mai ";
      case 5:
        mois = "Juin ";
      case 6:
        mois = "Juillet ";
      case 7:
        mois = "Août ";
      case 8:
        mois = "Septembre ";
      case 9:
        mois = "Octobre ";
      case 10:
        mois = "Novembre ";
      case 11:
        mois = "Décembre"
    }
    notificationBody = attendant + " va jouer à " + place + " " + jour + "le " + date + " "
        + mois + annee + " à "`${time}`;
  }

  for (let follower in followers) {

    await graphqlClient.mutate({
      mutation: createNotification,
      variables: {
        input: {
          profileID: follower.followerID,
          type: "friendPlaying",
          body: `${notificationBody}`
        }
      }
    }).then(res => {
      console.log(`   Notification successfully sent to ${follower.followerID}: ${notificationBody}`);
    }).catch(error => {
      console.log("   !!!ERROR in createNotification mutation to", follower.followerID, JSON.stringify(error));
      throw(JSON.stringify(error));
    })
  }

  return createdAttendance;
}


async function createUserCurrentPlaceRes(ctx){
  let data;
  let followers;
  let place;
  await graphqlClient.mutate({
    mutation: updateUserProfile,
    variables: {
      input:{
        id: ctx.input.id,
        currentPlaceID: ctx.input.currentPlaceID
      }
    }
  }).then(res => {
    console.log(`  ${res.updateUprofile.username} currentPlace is now ${res.updateUprofile.currentPlace.name}`);
    place = res.updateUprofile.currentPlace.name;
    followers = res.updateUprofile.followers.items;
    data = res;
  }).catch(error => {
    console.log("   !!!Error updating the user currentPlace:", JSON.stringify(error));
    throw JSON.stringify(error);
  });

  for(let follower in followers){
    await graphqlClient.mutate({
      mutation: createNotification,
      variables: {
        input: {
          profileID: follower.follower.id,
          type: "friendPlaying",
          body: `${follower.follower.username} joue actuellement à ${place}`
        }
      }
    }).then(res => {
      console.log(`   Notification successfully sent to ${follower.follower.id}: ${follower.follower.username} est à ${place}`)
    }).catch(error => {
      console.log(`   !!!Error creating notification to ${follower.follower.id}: ${JSON.stringify(error)}`)
    })
  }

  return {
    currentPlaceID: data.updateUprofile.currentPlaceID,
    currentPlace: data.uProfile.currentPlace
  };
}


async function createUserConnectionRes(ctx){
  let userConnection;
  await graphqlClient.mutate({
    mutation: createUserConnection,
    variables:{
      input:{
        followerID: ctx.input.followerID,
        followedID: ctx.input.followedID
      }
    }
  }).then(res => {
    console.log(`   ${res.createUserConnection.follower.username} successfully followed ${res.createUserConnection.follower.username}`)
    userConnection = res.createUserConnection;
  }).catch(err => {
    console.log("   !!!ERROR in follow request. Request arguments:", JSON.stringify(ctx.input), "Error", JSON.stringify(error));
    throw JSON.stringify(err);
  })

  await graphqlClient.mutate({
    mutation: createNotification,
    variables: {
      profileID: userConnection.followedID,
      type: "newFollower",
      body: `${userConnection.follower.username} vient s'abonner à votre compte`
    }
  }).then(res => {
    console.log("   Notification envoyée à", userConnection.followedID, ":", `${userConnection.follower.username} vient s'abonner à votre compte`)
  }).catch(err => {
    console.log(`   !!!Error creating notification to ${userConnection.followedID}: ${JSON.stringify(err)}`);
    throw(JSON.stringify(err));
  })

  return userConnection;
}

