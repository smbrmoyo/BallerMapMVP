

const gql = require('graphql-tag');
module.exports = {
    createEvent: gql `mutation createEvent(
        $condition: ModelEventConditionInput
        $input: CreateEventInput!
      ){
         createEvent(condition: $condition, input: $input){
           id
           name
           creator{
             username
           }
           place{
             name
           }
         }
      }`,

    createUserEventConnection: gql`mutation createUserEventConnection(
       $condition: ModelUserEventConnectionConditionInput
       $input: CreateUserEventConnectionInput!
      ){
        createUserEventConnection(input: $input, condition: $condition){
            Event{
                name
            }
            userProfile{
                username
            }
        }
      }`,

    createNotification: gql`mutation createNotification(
        $condition: ModelNotificationConditionInput,
        $input: CreateNotificationInput!
      ){
         createNotification(input: $input, condition: $condition){
           uProfile{
               username
           },
           type  
         }
       }`,

    createUserPlaceConnection: gql`mutation createUserPlaceConnection(
        $condition: ModelUserPlaceConnectionConditionInput,
        $input: CreateUserPlaceConnectionInput!
    ){
        createUserPlaceConnection(input: $input, condition: $condition){
            profileID
            placeID
            uProfile{
                username,
                followers{
                    items{
                        followerID
                    }
                }
            },
            place{
                name
            },
            arrivingTime,
            departureTime
        }
    }`,

    updateUserProfile: gql`mutation updateUprofile(
        $condition: ModelUprofileConditionInput,
        $input: UpdateUprofileInput!
    ){
        updateUprofile(input: $input, condition: $condition){
            currentPlace{
                name,
                id
            },
            username
            followers{
                items{
                   follower{
                       id
                       username
                   } 
                }
            }
        }
    }`,

    createUserConnection: gql`mutation createUserConnection(
        $condition: ModelUserConnectionConditionInput,
        $input: CreateUserConnectionInput!
    ){
        createUserConnection(condition: $condition, input: $input){
            followed{
                username
            }
            follower{
                username
            }
            followerID
            followedID
        }
    }`
}