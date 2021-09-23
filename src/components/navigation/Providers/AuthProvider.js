import React, { useContext, useState, useEffect, useRef } from "react";
import {Auth} from 'aws-amplify';
import {createUserDoc, createUserProfile} from '../../../aws-functions/userFunctions'
//const Realm = require("realm");
//import { getRealmApp } from "../../../../realmServer";
import { useNavigation } from "@react-navigation/native";
import awsmobile from "../../../aws-exports";
import {async} from "../../../../../BallerMapReal/realm-js/integration-tests/environments/react-native/harness/react-native-cli";

// Access the Realm App.
//const app = getRealmApp();

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children, navigation }) => {
  const [user, setUser] = useState();
  const [profileDoc, setProfileDoc] = useState();
  const realmRef = useRef();
  const userRealmRef = useRef();
  const [userRealm, setUserRealm] = useState(null);
  const [profilePartition, setProfilePartition] = useState(null);
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (!user) {
      return;
    }

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    /*const myProject = {name: 'My Project', partition: `project=${user.id}`};
    setProjectData([myProject]);*/



    // Open a realm with the logged in user's partition value in order
    // to get the custom user data


    return () => {
      // cleanup function

    };
  }, []);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (username, password) => {
    try{
        const user = await Auth.signIn(username, password);
    } catch(error) {
        console.log('error signing in', error);
    }
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (username, email, password) => {
    try {
        const user = await Auth.signUp({
            username,
            password,
            attributes: {
                email: email
            }
        }).then(async() => {
            await createUserDoc({email:email}).then(async(result) => {
                let uProfileInput = {
                    userDocId: result.id,
                    username: username
                }
                await createUserProfile(uProfileInput)
            });
        })
        return username
    } catch(error) {
        console.log('error signing up', error);
    }
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = async() => {
    try{
        await Auth.signOut();
    } catch(error) {
        console.log('error signing out', error)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        signUpTrigger,
        user,
        profilePartition,
        profileDoc,
        setProfileDoc,
        loadingUser, // profle partition
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

export { AuthProvider, useAuth, getUprofile };
