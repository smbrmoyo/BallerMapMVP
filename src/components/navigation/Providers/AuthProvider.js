import React, { useContext, useState, useEffect, useRef } from "react";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import {
  createUserDoc,
  createUserProfile,
  getUprofileDoc,
  getUserDoc,
} from "../../../aws-functions/userFunctions";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [client, setClient] = useState();
  const [yourEvents, setYourEvents] = useState([]);
  const [user, setUser] = useState(); // set this to true on confirmSignUp
  const [createdDocs, setCreatedDocs] = useState(true);
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const currentUserCreds = async () => {
      let res = await AsyncStorage.getItem("currentUserCreds").then((res) => {
        return JSON.parse(res);
      });
      if (res != null) {
        setUser(res.email);
        console.log("stored User: " + JSON.stringify(res));
        let signed = signIn(res.email, res.password).then((result) => {
          console.log("setting User");

          return res.email;
        });
        return signed;
      } else {
        return false;
      }
    };

    currentUserCreds();
  }, []);

  useEffect(() => {
    /*getFilteredEvents({ creatorID: { contains: "" } }, 2).then((events) => {
      setYourEvents(events.data.listEvents.items);
    });*/
  }, []);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email, password) => {
    let res = await Auth.signIn(email, password)
      .then((res) => {
        AsyncStorage.setItem(
          "currentUserCreds",
          JSON.stringify({ email: email, password: password })
        );
        console.log("signIn Succrss");
        return true;
      })
      .catch((error) => {
        if (error.name == "InvalidParameterException") {
          console.log("signIn Error: " + JSON.stringify(error));
        }
        return false;
      });
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

  const confirmSignUp = async (email, code) => {
    try {
      AsyncStorage.removeItem("profileCreated");
      const confirmedUser = await Auth.confirmSignUp(email, code).then(
        (res) => {
          console.log("reponse du confirmSignup" + JSON.stringify(res));
        }
      );
      return email;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        console.log(error);
      } else {
        console.log(error);
      }
      console.log("error confirming user", error);
    }
  };

  /**Fonction pour vérifier l'existence d'un userDoc et d'un profileDoc
   * Retourne un boleen
   */
  const IsProfileDoc = async (email) => {
    let isUserDoc = await getUserDoc(email);
    if (isUserDoc !== null) {
      // userDoc créé
      console.log("is userDoc " + email);
      let isProfileDoc = await getUprofileDoc(email).catch((err) =>
        console.log("console " + JSON.stringify(err))
      );
      if (isProfileDoc != null) {
        return true;
      }
    } else {
      console.log("pas de user Doc");
      AsyncStorage.removeItem("profileCreated");
      //création du userDoc
      const userDocInput = {
        email: email,
      };
      let userDoc = await createUserDoc(userDocInput)
        .then((asyncRes) => {
          console.log("userDoc créé: " + JSON.stringify(asyncRes));
        })
        .catch((error) =>
          console.log(
            "error creating userDoc on signIn " + JSON.stringify(error)
          )
        );
      return false;
    }
    return false;
  };

  const createProfileDoc = async (username, name) => {
    const uProfileInput = {
      id: user,
      userDocId: user,
      username: username,
      name: name,
    };
    await createUserProfile(uProfileInput).then((res) => {
      console.log("ProfileDoc créé: " + JSON.stringify(res));
    });
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
      AsyncStorage.removeItem("currentUserCreds");
      setUser(null);
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
        createProfileDoc,
        auth,
        setAuth,
        client,
        setClient,
        createdDocs,
        setCreatedDocs,
        IsProfileDoc,
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

export { useAuth };

export { AuthProvider };
