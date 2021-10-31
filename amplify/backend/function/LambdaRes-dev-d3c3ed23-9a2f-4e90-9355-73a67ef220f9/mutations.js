

const gql = require('graphql-tag');
module.exports = {
    createEvent: gql `mutation createEvent(
        $condition: ModelEventConditionInput
        $input: CreateEventInput!
      ){
         createEvent(condition: $condition, input: $input){
           id   
           name 
           description   
           creatorID  
           placeID
           beginningTime 
           endingTime  
           creator{
             username
             id  
             userDocId
             updatedAt  
             createdAt  
           }
           place{
             name
             id
             address
             createdAt
             updatedAt  
           }
           updatedAt
           createdAt  
         }
      }`,

    createUserEventConnection: gql`mutation createUserEventConnection(
       $condition: ModelUserEventConnectionConditionInput
       $input: CreateUserEventConnectionInput!
      ){
        createUserEventConnection(input: $input, condition: $condition){
            id
            profileID
            userProfile{
                userDocId
                id
                username
                myEvents{
                    items{
                        Event{
                            id
                            name
                            place{
                                id
                                name
                            }
                        }
                    }
                }
            }
            Event{
                id
                name
            }
        }
      }`,

    createNotification: gql`mutation createNotification(
        $condition: ModelNotificationConditionInput,
        $input: CreateNotificationInput!
      ){
         createNotification(input: $input, condition: $condition){
           id  
           uProfile{
               username
               id
               userDocId
           }
           profileID  
           type  
           body  
         }
       }`,

    createUserPlaceConnection: gql`mutation createUserPlaceConnection(
        $condition: ModelUserPlaceConnectionConditionInput,
        $input: CreateUserPlaceConnectionInput!
    ){
        createUserPlaceConnection(input: $input, condition: $condition){
            id
            profileID
            placeID
            uProfile{
                id
                username
                followers{
                    items{
                        followerID
                    }
                }
                userDocId
                updatedAt
                createdAt
            },
            place{
                id
                address
                name
                updatedAt
                createdAt
            },
            arrivingTime
            departureTime
            createdAt
            updatedAt
        }
    }`,

    updateUserProfile: gql`mutation updateUprofile(
        $condition: ModelUprofileConditionInput,
        $input: UpdateUprofileInput!
    ){
        updateUprofile(input: $input, condition: $condition){
            id
            userDocId
            currentPlace{
                name
                id
                address
                createdAt
                updatedAt
            },
            username
            followers{
                items{
                   follower{
                       id
                       username
                   }
                    followed{
                        id
                        username
                    }
                }
            }
            createdAt
            updatedAt
        }
    }`,

    createUserConnection: gql`mutation createUserConnection(
        $condition: ModelUserConnectionConditionInput,
        $input: CreateUserConnectionInput!
    ){
        createUserConnection(condition: $condition, input: $input){
            id
            followed{
                username
                id
                userDocId
                updatedAt
                createdAt
            }
            follower{
                username
                id
                userDocId
                updatedAt
                createdAt
            }
            followerID
            followedID
            createdAt
            updatedAt
        }
    }`
}