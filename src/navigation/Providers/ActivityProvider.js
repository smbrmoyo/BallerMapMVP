import React, { useContext, useState, useEffect, useRef } from "react";
import { useAuth } from "./AuthProvider";
import { getAllNotifications } from "../../../aws-functions/userFunctions";
import { Auth, API, graphqlOperation } from "aws-amplify";
export const ActivityContext = React.createContext(null);

const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState();
  const [loadingNotif, setLoadingNotif] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    console.log("<------------- ACTIVITYPROVIDER ---------------->");
    getAllNotifications(user)
      .then((res) => {
        setActivity(res);
        setLoadingNotif(false);
      })
      .catch((error) => {
        console.log(
          "      ERREUR dans le Use Effect du ActivityProvider:",
          error
        );
      });
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        loadingNotif,
        activity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

const useActivity = () => {
  const result = useContext(ActivityContext);
  return result;
};

export { useActivity, ActivityProvider };
