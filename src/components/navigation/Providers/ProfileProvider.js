import React, { useContext, useState, useEffect, useRef } from "react";
//import Realm from "realm";
import { useAuth } from "./AuthProvider";
import {
  createUserDoc,
  createUserProfile,
  getUprofileDoc,
  getUserDoc,
  getAllUserProfiles,
} from "../../../aws-functions/userFunctions";
import { useQuery } from "react-query";

export const ProfileContext = React.createContext();

const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [profileDoc, setProfileDoc] = useState(null);
  const [status, setStatus] = useState("loading");

  const result = useQuery("getProfile", getUprofileDoc(user));

  /*useEffect(() => {
    if (result.status != status) {
      setProfileDoc(result.data);
      setStatus(result.status);
    } else {
      setStatus(result.status);
    }
  }, [result.status]);*/
  useEffect(() => {
    getUprofileDoc(user).then((response) => {
      setProfileDoc(response);
    });

    getAllUserProfiles().then((response) => {
      setAllUsers(response);
    });
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        username,
        followers,
        setUsername,
        profileDoc,
        setProfileDoc,
        allUsers,
        status,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useProfile = () => {
  //Valeurs du AuthProvider
  const profile = useContext(ProfileContext);
  if (profile == null) {
    throw new Error("useProfile() called outside of a ProfileProvider?");
  }
  return profile;
};

export { ProfileProvider, useProfile };
