import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [isPdoc, setIsPdoc] = useState(false);
  const [loadingProfileDoc, setLoadingProfileDoc] = useState(true);
  const { IsProfileDoc, user } = useAuth();

  useEffect(() => {
    console.log("<------------- APPPROVIDER ---------------->");
    let profileDoc = IsProfileDoc(user)
      .then((res) => {
        if (res) {
          console.log("--- Profile Doc présent, heading to MapStack");
          setIsPdoc(true);
          setLoadingProfileDoc(false);
        } else {
          setLoadingProfileDoc(false);
        }
      })
      .catch((error) => {
        console.log(
          "--- !!!ERREUR dans le UseEffect du AppProvider",
          JSON.stringify(error)
        );
        setLoadingProfileDoc(false);
      });

    /**const subscribeToNewNotification = API.graphql(
         graphqlOperation(onCreateNotification, { id: user })
         ).subscribe({
          next: async ({ value }) => {
            console.log(value.data.onCreateNotification);
          },
          error: (error) => console.log(error),
        });

         return () => subscribeToNewNotification.unsubscribe();*/
  }, []);

  return (
    <AppContext.Provider
      value={{
        isPdoc,
        setIsPdoc,
        loadingProfileDoc,
        setLoadingProfileDoc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  //Valeurs du AuthProvider
  const Context = useContext(AppContext);

  return Context;
};

export { useAppContext };
export default AppProvider;
