import React, { useContext, useState, useEffect, useRef } from "react";
import { Auth } from "aws-amplify";
import Alert from "react-native";
import {
  createUserDoc,
  createUserProfile,
} from "../../../aws-functions/userFunctions";
import { getFilteredEvents } from "../../../aws-functions/eventFunctions";
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
  const [yourEvents, setYourEvents] = useState([]);
  const [user, setUser] = useState(); // set this to true on confirmSignUp
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const effect = async () => {
      await Auth.currentAuthenticatedUser()
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.log("User session error " + error);
        });
    };

    return () => {
      // cleanup function
    };
  }, []);

  useEffect(() => {
    getFilteredEvents(
      { creatorID: { contains: "8d33bf79-f4b2-416d-80d9-68e09b7be6ea" } },
      2
    ).then((events) => {
      //console.log(events.data.listEvents.items.id);
      setYourEvents(events.data.listEvents.items);
    });
  }, []);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (username, password) => {
    try {
      await Auth.signIn(username, password).then(() => {
        setUser({
          username: username,
        });
      });
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (username, email, password) => {
    try {
      const user = await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
        },
      }).then(async (res) => {
        console.log(JSON.stringify(res));
      });
      return username;
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

  const confirmSignUp = async (username, code, email) => {
    try {
      const confirmedUser = await Auth.confirmSignUp(username, code).then(
        async (res) => {
          console.log(JSON.stringify(res));
          console.log("email used for docCreation");
          await createUserDoc({ email: email }).then(async (result) => {
            let uProfileInput = {
              userDocId: result.id,
              username: username,
            };
            await createUserProfile(uProfileInput);
          });
        }
      );
      return username;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        Alert.alert(error);
      }
      console.log("error confirming user", error);
    }
  };

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
        yourEvents,
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
