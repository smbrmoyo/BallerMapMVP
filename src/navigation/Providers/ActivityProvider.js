import React, { useContext, useState, useEffect, useRef } from "react";
import { useAuth } from "./AuthProvider";
import * as queries from "../../graphql/queries";
import { Auth, API, graphqlOperation } from "aws-amplify";
export const ActivityContext = React.createContext(null);

const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState();
  const [loadingNotif, setLoadingNotif] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    console.log("<------------- ACTIVITYPROVIDER ---------------->");
    getActivity(user)
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

async function getActivity(userId) {
  let notif = await API.graphql(
    graphqlOperation(queries.listNotifications, {
      //sortDirection: "DESC",
      filter: {
        profileID: {
          eq: userId,
        },
      },
    })
  )
    .then((result) => {
      return result.data.listNotifications.items;
    })
    .catch((error) => {
      console.log(
        "   !!!ERREUR de la requête listNotifications dans la fonction getActivity du ACtivity Provider:",
        JSON.stringify(error)
      );
      throw JSON.stringify(error);
    });
  return notif;
}

const useActivity = () => {
  const result = useContext(ActivityContext);
  return result;
};

export { useActivity, ActivityProvider };
