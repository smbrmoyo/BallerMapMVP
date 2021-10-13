const gql = require('graphql-tag');
const graphql = require('graphql');
module.exports = {
    createEvent: gql `mutation createEvent(
        $condition: ModelEventConditionInput
        $input: CreateEventInput!
      ){
         createEvent(condition: $condition, input: $input){
           id
           name
           participants
           creator{
             username
           }
           place{
             name
           }
         }
      }`,

    createUserEventConnection: gql`mutation createUserEventConection(
       $condition: ModelUserEventConnectionConditionInput
       $input: CreateUserEventConectionInput!
      ){
        createUserEventConnection(input: $input, condition: $condition){
            Event{
                name
            }
            userProfile{
                username
            }
        }
      }`
}