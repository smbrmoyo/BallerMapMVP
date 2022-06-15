import React, { useContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import {
  createUserDoc,
  createUserProfile,
  getUprofileDoc,
  getUserDoc,
} from "../../aws-functions/userFunctions";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [client, setClient] = useState();
  const [yourEvents, setYourEvents] = useState([]);
  const [user, setUser] = useState(); // set this to true on confirmSignUp
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    console.log("\n", "\n", "<------------- AUTHPROVIDER ---------------->");
    let creds = AsyncStorage.getItem("currentUserCreds").then((res) => {
      if (res) {
        // stored user
        console.log("   Stored User found: " + JSON.stringify(res));
        console.log("   Signing in stored User");
        res = JSON.parse(res);
        let signed = signIn(res.email, res.password)
          .then((result) => {
            if (result) {
              console.log("   Stored User signed in, heading to AppStack");
              setUser(res.email);
              setLoadingUser(false);
            }
          })
          .catch((error) => {
            console.log(error);
            console.log(
              "   Couldn't sign in stored user, cuurentUserCreds cleared from device storage"
            );
            console.log("heading to AuthStack");
            AsyncStorage.removeItem("currentUserCreds");
            setLoadingUser(false);
          });
      } else {
        // pas de stored user
        console.log("   Stored user not found, heading to AuthStack");
        setLoadingUser(false);
      }
    });
  }, []);

  /**
   * @param email
   * @param password
   * @returns {Promise<boolean>} true or throw an error
   *        Sets current user creds in Local storage to signed in user creds on sucess
   */
  const signIn = async (email, password) => {
    console.log("signing in");
    let res = await Auth.signIn(email, password)
      .then((res) => {
        console.log("      signIn function Success");
        return true;
      })
      .catch((error) => {
        if (error.name == "InvalidParameterException") {
          console.log(
            "      !!!ERREUR: Auth.signIn Error, [InvalidParameterException]: " +
              JSON.stringify(error)
          );
          throw JSON.stringify(error);
        } else if (error.code == "UserNotFoundException") {
          console.log(
            "      !!!ERREUR: Auth.signIn Error: " + JSON.stringify(error)
          );
          throw "UserNotFoundException";
        } else if (error.code == "UserNotConfirmedException") {
          console.log(
            "      !!!ERREUR: Auth.signIn Error: " + JSON.stringify(error)
          );
          throw "UserNotConfirmedException";
        } else if (error.message == "Incorrect username or password.") {
          console.log(" !!!ERREUR: Auth.signIn Error:", JSON.stringify(error));
          throw "Incorrect username or password.";
        }
      });
    return res;
  };

  /**
   * @param email
   * @param password
   * @returns {Promise<*>} that resolves to the new user email
   * Throws an error on failure
   */
  const signUp = async (email, password) => {
    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      }).then(async (res) => {
        console.log("      Réponse du signup ----->", JSON.stringify(res));
        return email;
      });
      return user;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        //Alert.alert("       ERREUR dans la fonction SignUp, UsernameExistsException", JSON.stringify(error));
        throw "UsernameExistsException";
      } else {
        Alert.alert(
          "       ERREUR dans la fonction SignUp",
          JSON.stringify(error)
        );
        throw "   ERREUR dans la fonction SignUp: " + JSON.stringify(error);
      }
      console.log("error signing up", JSON.stringify(error));
    }
  };

  /**
   * @param email
   * @param code
   * Verifie le code de confirmation de l'utilisateur
   * @returns {Promise<boolean>} true if success
   * Throw an error on failure
   */
  const confirmSignUp = async (email, code) => {
    try {
      const confirmedUser = await Auth.confirmSignUp(email, code).then(
        (res) => {
          console.log("      reponse du confirmSignup" + JSON.stringify(res));
          return true;
        }
      );
      return confirmedUser;
    } catch (error) {
      if (error.name == "UsernameExistsException") {
        console.log(
          "      ERROR dans la fonction confirmSignup :",
          JSON.stringify(error)
        );
        throw `ERROR confirming user [UsernameExistsException]: ${JSON.stringify(
          error
        )}`;
      } else if (error.name == "UnexpectedLambdaException") {
        console.log(
          "      ERROR dans la fonction confirmSignup:",
          JSON.stringify(error)
        );
        //throw `ERROR confirming user : ${JSON.stringify(error)}`;
      } else {
        console.log(
          "      ERROR dans la fonction confirmSignup:",
          JSON.stringify(error)
        );
        throw `ERROR confirming user : ${JSON.stringify(error)}`;
      }
    }
  };

  /**
   * Fonction pour vérifier l'existence d'un profile utilisateur
   * @param email
   * @returns {Promise<boolean>} resolves to true if user profile document exists
   * If userDoc absent, crée un userdoc et return false
   * Throws an error on failure
   */
  const IsProfileDoc = async (email) => {
    console.log("   ---Recherche du profile utilisateur");
    let isUserDoc = await getUserDoc(email).catch((error) => {
      console.log(
        "   --- ERREUR de la requête getUserDoc:",
        JSON.stringify(error)
      );
      throw "ERREUR de la requête getUserDoc: " + JSON.stringify(error);
    });
    if (isUserDoc != null || isUserDoc != undefined) {
      console.log("   ---User doc trouvé");
      let isProfileDoc = await getUprofileDoc(email).catch((err) => {
        console.log(
          "   ---!!! ERREUR de la requête getUprofileDoc " + JSON.stringify(err)
        );
      });
      if (isProfileDoc != null) {
        console.log("   --- Profile utilisateur trouvé");
        return true;
      } else {
        console.log(
          "   --- Le profile Doc est absent. ---> heading to setProfileScreen"
        );
        return false;
      }
    } else {
      // User doc absent --> création du userDoc
      console.log("   --- User Doc absent,  Création du userDoc");
      const userDocInput = {
        email: email,
      };
      let userDoc = await createUserDoc(userDocInput)
        .then((asyncRes) => {
          console.log("   --- User Doc créé: " + JSON.stringify(asyncRes));
        })
        .catch((error) => {
          console.log(
            "   ---!!!ERREUR de la requête createUserDoc: " +
              JSON.stringify(error)
          );
          throw "ERREUR de la requête createUserDoc: " + JSON.stringify(error);
        });
      return false;
    }
  };
  /**
   * May be unused
   * @param username
   * @param name
   * @returns {Promise<void>}
   */
  const createProfileDoc = async (username, name) => {
    const uProfileInput = {
      id: user,
      userDocId: user,
      username: username,
      name: name,
    };
    await createUserProfile(uProfileInput)
      .then((res) => {
        console.log("ProfileDoc créé: " + JSON.stringify(res));
      })
      .catch((error) => {
        throw `ERREUR de la requête createUserProfile: ${JSON.stringify(
          error
        )}`;
      });
  };

  // Resend the confirmation code in case the user didn't receive it
  const resendConfirmationCode = async (username) => {
    try {
      const newCode = await Auth.resendSignUp(username).then((res) => {
        console.log("      Successfully resent confirmation code");
        return res;
      });
      return newCode;
    } catch (err) {
      console.log(
        "      ERREUR de la fonction Auth.resendSignup:",
        JSON.stringify(err)
      );
      throw JSON.stringify(err);
    }
  };

  // To retrieve old password
  // Send confirmation code to user's email
  const forgotPassword = (username) => {
    return Auth.forgotPassword(username)
      .then((data) => console.log(data))
      .catch((err) =>
        console.log(
          "Error sending confirmation code to user : " + JSON.stringify(error)
        )
      );
  };

  // Collect confirmation code and new password, then
  const forgotPasswordSubmit = (username, code, new_password) => {
    return Auth.forgotPasswordSubmit(username, code, new_password)
      .then((data) => console.log(data))
      .catch((err) =>
        console.log(
          "Error confirming code and/or new password : " + JSON.stringify(error)
        )
      );
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = async () => {
    try {
      await Auth.signOut().then((res) => {
        AsyncStorage.removeItem("currentUserCreds");
        setUser(null);
      });
    } catch (error) {
      console.log("error signing out", error);
      throw "Error SigningOut";
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
        setLoadingUser,
        confirmSignUp,
        resendConfirmationCode,
        forgotPassword,
        forgotPasswordSubmit,
        createProfileDoc,
        auth,
        setAuth,
        client,
        setClient,
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
