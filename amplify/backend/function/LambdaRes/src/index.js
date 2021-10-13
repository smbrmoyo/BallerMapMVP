/* Amplify Params - DO NOT EDIT
	API_BALLERMAPMVP_GRAPHQLAPIENDPOINTOUTPUT
	API_BALLERMAPMVP_GRAPHQLAPIIDOUTPUT
	AUTH_BALLERMAPMVP60E3B21C60E3B21C_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const {createEventResolver} = require('./resolvers')

const appsync = require('aws-appsync');
const gql = require('graphql-tag');
const mutations = require('./mutations')
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


/**
 * Pick resolver
 */
const resolvers = {
    Mutation:{
        createEvent_c: ctx => createEventResolver(ctx)
    }
}


exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
