const {createEvent,
  createUserEventConnection,
  createNotification,
  updateUserProfile,
  createUserConnection,
  createUserPlaceConnection
} = require('./mutations');

const {AWSAppSyncClient} = require('aws-appsync');
require('cross-fetch/polyfill');

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
    createdEvent = {
      id: result.data.createEvent.id,
      name: result.data.createEvent.name,
      creatorID: result.data.createEvent.creatorID,
      description: result.data.createEvent.description,
      begginingTime: result.data.createEvent.begginingTime,
      creator: {
        username: result.data.createEvent.creator.username,
        id: result.data.createEvent.creator.id,
        userDocId: result.data.createEvent.creator.userDocId,
        updatedAt: result.data.createEvent.creator.updatedAt,
        createdAt: result.data.createEvent.creator.createdAt
      },
      place: {
        address: result.data.createEvent.place.address,
        name: result.data.createEvent.place.name,
        id: result.data.createEvent.place.id,
        updatedAt: result.data.createEvent.place.updatedAt,
        createdAt: result.data.createEvent.place.createdAt
      },
      placeID: result.data.createEvent.placeID,
      updatedAt: result.data.createEvent.updatedAt,
      createdAt: result.data.createEvent.createdAt
    }
    advance = true
  }).catch(error => {
    console.log("Erreur dans la mutation create Event ---------->", error);
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
        throw `Error adding user ${participants[participantID]} to event ${createdEvent.id} -------------> ${err}`;
      })
      //send Notification to participant
      graphqlClient.mutate({
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
    console.log("  Request Successful !!!!!");
    return createdEvent;
  } else{
    console.log("Request UnSuccessful !!!!!");
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
  if (ctx.input.departureTime === null) {
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
      id: res.data.createUserPlaceConnection.id,
      profileID: res.data.createUserPlaceConnection.profileID,
      uProfile: {
        id: res.data.createUserPlaceConnection.uProfile.id,
        username: res.data.createUserPlaceConnection.uProfile.username,
        userDocId: res.data.createUserPlaceConnection.uProfile.userDocId,
        createdAt: res.data.createUserPlaceConnection.uProfile.createdAt,
        updatedAt: res.data.createUserPlaceConnection.uProfile.updatedAt
      },
      place: {
        id: res.data.createUserPlaceConnection.place.id,
        name: res.data.createUserPlaceConnection.place.name,
        address: res.data.createUserPlaceConnection.place.address,
        updatedAt: res.data.createUserPlaceConnection.place.updatedAt,
        createdAt: res.data.createUserPlaceConnection.place.createdAt
      },
      placeID: placeID,
      arrivingTime: ctxInput.arrivingTime,
      departureTime: ctxInput.departureTime,
      createdAt: res.data.createUserPlaceConnection.createdAt,
      updatedAt: res.data.createUserPlaceConnection.updatedAt
    };
    console.log("   Attendance successfully created by ", attendant, "to", place);
  }).catch(error => {
    console.log("   !!!ERROR creating the userPlaceConnection record", error);
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

     graphqlClient.mutate({
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
      return;
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
  let advance = true;
  let retour;
  await graphqlClient.mutate({
    mutation: updateUserProfile,
    variables: {
      input:{
        id: ctx.input.id,
        currentPlaceID: ctx.input.currentPlaceID
      }
    }
  }).then(res => {
    if(res.data.updateUprofile.currentPlace != null){
      advance = true;
      place = null;
      retour = {
        id: res.data.updateUprofile.id,
        username: res.data.updateUprofile.username,
        currentPlaceID: res.data.updateUprofile.currentPlace.id,
        currentPlace:{
          name: res.data.updateUprofile.currentPlace.name,
          id: res.data.updateUprofile.currentPlace.id,
          address: res.data.updateUprofile.currentPlace.address,
          updatedAt: res.data.updateUprofile.currentPlace.updatedAt,
          createdAt: res.data.updateUprofile.currentPlace.createdAt
        },
        userDocId: res.data.updateUprofile.userDocId,
        createdAt: res.data.updateUprofile.createdAt,
        updatedAt: res.data.updateUprofile.updatedAt
      }
      place = res.data.updateUprofile.currentPlace.name;
      followers = res.data.updateUprofile.followers.items;
      data = res.data;
      console.log(`  ${res.data.updateUprofile.username} currentPlace is now ${res.data.updateUprofile.currentPlace.name}`);
    }else{
      retour = {
        currentPlaceID: null,
        currentPlace: null,
        id: res.data.updateUprofile.id,
        updatedAt: res.data.updateUprofile.updatedAt,
        createdAt: res.data.updateUprofile.createdAt
      }
      console.log(`  ${res.data.updateUprofile.username} currentPlace is now null`);
      return;
    }
  }).catch(error => {
    console.log("   !!!Error updating the user currentPlace:", error);
    throw JSON.stringify(error);
  });

  if(advance){
    for(let follower in followers){
      await graphqlClient.mutate({
        mutation: createNotification,
        variables: {
          input: {
            profileID: followers[follower].follower.id,
            type: "friendPlaying",
            body: `${followers[follower].followed.username} joue actuellement à ${place}`
          }
        }
      }).then(res => {
        console.log(`   Notification successfully sent to ${followers[follower].follower.id}: ${followers[follower].followed.username} est à ${place}`)
      }).catch(error => {
        console.log(`   !!!Error creating notification to ${followers[follower].follower.id}: ${JSON.stringify(error)}`)
      })
    }
  }

  return retour;
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
    userConnection = {
      id: res.data.createUserConnection.id,
      followerID: res.data.createUserConnection.followerID,
      followedID: res.data.createUserConnection.followedID,
      follower: {
        username: res.data.createUserConnection.follower.username,
        id: res.data.createUserConnection.follower.id,
        userDocId: res.data.createUserConnection.follower.userDocId,
        updatedAt: res.data.createUserConnection.follower.updatedAt,
        createdAt: res.data.createUserConnection.follower.createdAt
      },
      followed: {
        username: res.data.createUserConnection.followed.username,
        id: res.data.createUserConnection.followed.id,
        userDocId: res.data.createUserConnection.followed.userDocId,
        updatedAt: res.data.createUserConnection.followed.updatedAt,
        createdAt: res.data.createUserConnection.followed.createdAt
      },
      updatedAt: res.data.createUserConnection.updatedAt,
      createdAt: res.data.createUserConnection.createdAt
    };
    return;
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

