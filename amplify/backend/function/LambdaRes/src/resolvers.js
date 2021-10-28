
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
  if(hours < 10){
    hours = `0${hours}`;
  }
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  const result = hours + `:` + minutes
  return result;
}

async function createAttendanceRes(ctx) {
  let createdAttendance;
  let followers;
  let attendant; // USERNAME OF THE CURRENT USER
  let place;
  let placeID;
  let ctxInput;
  if (ctx.input.departureTime == null) {
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
    attendant = res.data.createUserPlaceConnection.uProfile.username;
    followers = res.data.createUserPlaceConnection.uProfile.followers.items;
    place = res.data.createUserPlaceConnection.place.name;
    placeID = res.data.createUserPlaceConnection.placeID;
    createdAttendance = {
      place: place,
      placeID: placeID,
      arrivingTime: ctxInput.arrivingTime,
      departureTime: ctxInput.departureTime
    };
    console.log("   Attendance successfully created by ", attendant, "to", place);
  }).catch(error => {
    console.log("  !!!ERROR creating the userPlaceConnection record", error);
    throw JSON.stringify(error);
  })
  const attendingDate = new Date(ctxInput.arrivingTime);
  let today = new Date()
  today.setHours(today.getHours() - 4);
  let advance = true;
  let jour =  attendingDate.getDay();
  let date = attendingDate.getDate();
  let mois;
  let annee =   attendingDate.getFullYear();
  let time = await stringifyTime(attendingDate.getHours(), attendingDate.getMinutes()).then(res =>{
    console.log(attendingDate.toISOString(), jour, annee, res);
    return res;
  }).catch(err => {
    console.log("   !!!Error stringifying time:", JSON.stringify(err));
    throw err;
  })
  let notificationBody;
  switch (jour) {
    case today.getDay():
      console.log("1")
      if (attendingDate.getMonth() === today.getMonth() && attendingDate.getFullYear() === today.getFullYear()) {
        notificationBody = `${attendant} va jouer à ${place} aujourd'hui à ${time}`;
        advance = false;
        break;
      };

    case 0:
      jour = "Dimanche ";
      break;
    case 1:
      jour = "Lundi ";
      break;
    case 2:
      console.log(today.getDay())
      jour = "Mardi ";
      break;
    case 3:
      jour = "Mercredi ";
      break;
    case 4:
      jour = "Jeudi ";
      break;
    case 5:
      jour = "Vendredi ";
      break;
    case 6:
      jour = "Samedi ";
      break;
  }


  if (advance) {
    switch (attendingDate.getMonth()) {
      case 0:
        mois = "Janvier ";
        break;
      case 1:
        mois = "Février ";
        break;
      case 2:
        mois = "Mars ";
        break;
      case 3:
        mois = "Avril ";
        break;
      case 4:
        mois = "Mai ";
        break;
      case 5:
        mois = "Juin ";
        break;
      case 6:
        mois = "Juillet ";
        break;
      case 7:
        mois = "Août ";
        break;
      case 8:
        mois = "Septembre ";
        break;
      case 9:
        mois = "Octobre ";
        break;
      case 10:
        mois = "Novembre ";
        break;
      case 11:
        mois = "Décembre ";
        break;
    }
    notificationBody = attendant + " va jouer à " + `${place}` + " " + `${jour}` + "le " + `${date}` + " "
        + `${mois}` + `${annee}` + " à " + time;
  }

  for (let follower in followers) {

    await graphqlClient.mutate({
      mutation: createNotification,
      variables: {
        input: {
          profileID: followers[follower].followerID,
          type: "friendPlaying",
          body: `${notificationBody}`
        }
      }
    }).then(res => {
      console.log(`   Notification successfully sent to ${followers[follower].followerID}: ${notificationBody}`);
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
    currentPlace: data.updateUprofile.uProfile.currentPlace
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
    console.log(`   ${res.data.createUserConnection.follower.username} successfully followed ${res.data.createUserConnection.follower.username}`)
    userConnection = res.data.createUserConnection;
  }).catch(err => {
    console.log("   !!!ERROR in follow request. Request arguments:", JSON.stringify(ctx.input), "Error", err);
    throw JSON.stringify(err);
  })

  await graphqlClient.mutate({
    mutation: createNotification,
    variables: {
      input: {
        profileID: userConnection.followedID,
        type: "newFollower",
        body: `${userConnection.follower.username} vient s'abonner à votre compte`
      }
    }
  }).then(res => {
    console.log("   Notification envoyée à", userConnection.followedID, ":", `${userConnection.follower.username} vient s'abonner à votre compte`)
  }).catch(err => {
    console.log(`   !!!Error creating notification to ${userConnection.followedID}: ${JSON.stringify(err)}`);
    throw(JSON.stringify(err));
  })

  return userConnection;
}

