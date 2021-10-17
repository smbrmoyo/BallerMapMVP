/* Amplify Params - DO NOT EDIT
	API_BALLERMAPMVP_GRAPHQLAPIENDPOINTOUTPUT
	API_BALLERMAPMVP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const region = process.env.REGION


const UserDocTable = process.env.UserDocTable;
const UprofileTable = process.env.UprofileTable;;
const UserConnectionTable = process.env.UserConnectionTable;
const EventTable = process.env.EventTable;
const UserEventConnectionTable = process.env.UserEventConnectionTable;

import {listUprofiles} from "../../../../../src/graphql/queries";

/**
 *
 * @param user
 * @returns {Promise<void>}
 */
async function listUprofilesResolver(user){
    // check user privacy
    let params = {
        TableName: UserDocTable,
        Key:{
            id: user
        }
    }
    const userDoc = docClient.get(params);
    //const user
}

/**
 * Choose a resolver to use
 * The variable resolvers is a map
 */
const resolvers = {
    Query:{
        listUprofiles: ctx => {
            // resolver function
            //we know thet the userDocId is the email
            let currentUser = ctx.arguments.userDocId
            return currentUser;
        }

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
    //return response;

    const typeHandler = resolvers[event.typeName];
    if(typeHandler) {
        const resolver = typeHandler[event.fieldName]
        return await resolver(event)
    }

};
