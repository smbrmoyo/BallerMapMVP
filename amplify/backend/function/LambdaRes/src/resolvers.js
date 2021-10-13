const {createEvent, createUserEventConnection} = require('./mutations')
const appsync = require('aws-appsync');
const gql = require('graphql-tag');
require('cross-fetch/polyfill');

const graphqlClient = new appsync.AWSAppSyncClient({
  url: process.env.API_BALLERMAPMVP_GRAPHQLAPIENDPOINTOUTPUT,
  region: process.env.AWS_REGION,
  auth: {
    type: 'AWS_IAM',
    credentials: {
      accessKeyId: 'AKIAZ2KSDGKQ7ORHRJXH',
      secretAccessKey: 'F8nOospjxa8Bs8odIEUACqo5NK/wjOL7E9/',
    }
  },
  disableOffline: true
});

module.exports = {
  createEventResolver: createEventRes
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
  let curEventID
  await graphqlClient.mutate({
    createEvent,
    variables:{
      input: {
        name: ctx.arguments.name,
        placeID: ctx.arguments.placeID,
        creatorID: ctx.creatorID, //email du currentUser
        beginningTime: ctx.arguments.beginningTime,
        endingTime: ctx.arguments.endingTime,
        tags: ctx.arguments.tags,
        description: ctx.arguments.description,
        privacy: private
      }
    }
  }).then(result => {
    console.log("Event Created ----------> ", result.data)
    curEventID = result.data.createEvent.id
    advance = true
  }).catch(error => console.log("Erreur dans la mutation create Event ---------->", JSON.stringify(error)))

  if(advance && curEventID) {
    let participants = ctx.arguments.participants
    for (let participantID in participants) {
      await graphqlClient.mutate({
        createUserEventConnection,
        variables: {
          input: {
            eventID: curEventID,
            profileID: participantID
          }
        }
      }).then(res => console.log(
          `${result.data.createUserEventConnection.userProfile.username} added to ${result.data.createUserEventConnection.Event.name} Event`
      )).catch(err => {
        console.log(
            `Error adding user ${participantID} to event ${curEventID} -------------> ${JSON.stringify(err)}`
        )
        advance = false
      })
    }
  }

  if(advance){
    console.log("Request Successful !!!!!")
  } else{
    console.log("Request UnSuccessful !!!!!")
  }

}