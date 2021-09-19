// const { createUserDoc } = require("./src/aws-functions/userFunctions");

const { API, graphqlOperation } = require("aws-amplify");
const mutations = require("./src/graphql/mutations.js");

const createUserDoc = (userData) => {
  API.graphql(
    graphqlOperation(mutations.createUserDoc, {
      input: {
        email: userData.email,
      },
    })
  );
};

const userOne = {
  email: "idiot@gmail.com",
};

createUserDoc(userOne);
