/* Amplify Params - DO NOT EDIT
	API_BALLERMAPMVP_GRAPHQLAPIENDPOINTOUTPUT
	API_BALLERMAPMVP_GRAPHQLAPIIDOUTPUT
	AUTH_BALLERMAPMVP60E3B21C60E3B21C_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */


const {createEventResolver, createUserPlaceConnectionResolver,
    createUserCurrentPlaceResolver, createUserConnectionResolver} = require('./resolvers')
/**
 * Pick resolver
 */
const resolvers = {
    Mutation:{
        createEvent_c: ctx => createEventResolver(ctx),
        createUserPlaceConnection: ctx => createUserPlaceConnectionResolver(ctx),
        updateCurrentPlace: ctx => createUserCurrentPlaceResolver(ctx),
        createUserConnection: ctx => createUserConnectionResolver(ctx)
    }
}


exports.handler = async (event) => {
    // TODO implement
    let err;
    console.log("      Received Event:", JSON.stringify(event))
    let statusCode
    const type = resolvers[event.type];
    const resolver = type[event.field];
    let data;
    await resolver(event.arguments).then(res => {
        data = res;
        console.log("      Request Successful :-) ")
    })/*.catch(error =>{
        console.log("      Error in the Lambda resolver execution. Status code 404");
        console.log(JSON.stringify(error))
        err = error;
    })*/
    //const data = await resolver(event.arguments);
    data? (statusCode = 200):(statusCode = 404);
    const response = {
        statusCode: statusCode,
        error: err,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        data: data
    };
    return response;
};
