import React, { useContext, useState, useEffect, useRef } from "react";
import { Auth } from "aws-amplify";
import Alert from "react-native";
import {
  createUserDoc,
  createUserProfile,
  getUprofileDoc,
  getUserDoc,
} from "../../../aws-functions/userFunctions";

import AsyncStorage from "@react-native-async-storage/async-storage";
//const Realm = require("realm");
//import { getRealmApp } from "../../../../realmServer";
import { useNavigation } from "@react-navigation/native";
import awsmobile from "../../../aws-exports";
import { react } from "@babel/types";

// Access the Realm App.
//const app = getRealmApp();

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [client, setClient] = useState();
  const [user, setUser] = useState(); // set this to true on confirmSignUp
  const [createdDocs, setCreatedDocs] = useState(false);
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    //console.log("Async storage log" + JSON.stringify(AsyncStorage.getItem("currentUserCreds")))
    const currentUserCreds = async() => {
      let res = await AsyncStorage.getItem("currentUserCreds").then(res => {
        return JSON.parse(res);
          }
      )
      return res;
    }
    if(currentUserCreds !== null){
      // SignIn the stored user
      console.log("stored User")
      const userCreds = async() => {await AsyncStorage.getItem("currentUserCreds")}
      const effect = async () => {
        await signIn(userCreds.email, userCreds.password).then(res => {
          console.log("Stored user signed in")
          setUser(userCreds.email)
        }).catch(err => {Alert.alert("error " +
            "signing In stored user: " + JSON.stringify(err))
        })
      }
      effect()
      //return ;
    } else{
      return;
    }

    return () => {
      // cleanup function, end connection to ressources
      if(!client){
        return;
      }
      else{
        client.destroy();
      }
    };
  }, []);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email, password) => {
      let res = await Auth.signIn(email, password).then(
          (res) => {
            AsyncStorage.setItem("currentUserCreds", JSON.stringify({email: email, password:password}))
            return true;
    }
      ).catch(error => {
        if(error.name == "InvalidParameterException"){
          console.log("signIn Error: " + JSON.stringify(error))
        }
        return false;
      })
      console.log("good job!")
      return res;
  };


  /**The signUp function takes an email and password and uses the
   * emailPassword authentication provider to register the user.
   * return l'email
  **/
  const signUp = async (email, password) => {
    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      }).then(async (res) => {
        console.log(JSON.stringify(res));
      });
      return email;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        Alert.alert(error);
      }
      console.log("error signing up", error);
    }
  };

  // Confirm signUp through verification per email

  /**Has an error No current user when creating because user not authenticated yet
   * Should be called after first signIn***
   * Could easily use AsyncStorage to check if it is first login
   * or if userDoc was already created
   * then call createUserDoc and createUserProfile
   */

  const confirmSignUp = async (email, code) => {
    try {
      const confirmedUser = await Auth.confirmSignUp(email, code).then(
        async (res) => {
          console.log("reponse du confirmSignup" + JSON.stringify(res));

          let userDocInput = {
            email: email,
            id: email
          }

          /*await createUserDoc(userDocInput).then((res) => {
            console.log("Userdoc créé apres confirm signup" + JSON.stringify(res));
          }).catch(e => console.log("erreur dans la créaction su  userDoc a confirm Signup" + e));*/
        });
      return email;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        Alert.alert(error);
      }
      else{
        Alert.alert(error);
      }
      console.log("error confirming user", error);
    }
  };


  /**Fonction pour vérifier l'existence d'un userDoc et d'un profileDoc
   * Retourne un boleen
   */
  const IsProfileDoc = async (email) => {
    let newDocs = {}
    let isUserDoc = await getUserDoc(email)
    if ((isUserDoc)  !== null){
      // userDoc créé
      console.log("UserDoc créé")
      let isProfileDoc = await getUprofileDoc(email)
      if(isProfileDoc !== null){
        return true;
      }
    }
    else{
      console.log("pas de user DOc")
       //création du userDoc
      const userDocInput = {
        email: email,
      }
       let userDoc = await createUserDoc(userDocInput).then(asyncRes => {
       console.log("userDOc créé: " + JSON.stringify(asyncRes))}).catch(error => console.log("error creating userDoc on signIN "
           + JSON.stringify(error)))
       return false
    }
    return false;
  }

  const createProfileDoc = async(username, name) => {
      const uProfileInput = {
        id: user,
        userDocId: user,
        username: username,
        name: name
      }
      await createUserProfile(uProfileInput).then((res) => {
        console.log("ProfileDoc créé: " + JSON.stringify(res));
      })
  }


  // Resend the confirmation code in case the user didn't receive it
  const resendConfirmationCode = async (username) => {
    try {
      const newCode = await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        setUser,
        loadingUser,
        confirmSignUp,
        resendConfirmationCode,
        auth,
        setAuth,
        client,
        setClient,
        createdDocs,
        setCreatedDocs,
        IsProfileDoc
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  //Valeurs du AuthProvider
  const auth = useContext(AuthContext);

  return auth;
};

const getUprofile = async (profilePartition) => {
  // get le profile Doc

  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const userData = mongodb.db("AYTO_Dev").collection("uProfile");
  const uProfileDoc = await userData.findOne({ partition: profilePartition });
  return uProfileDoc;
};

export { useAuth, getUprofile };

export { AuthProvider };
