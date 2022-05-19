import React, { useContext, useState, useEffect, useRef } from "react";
import {AuthContext, useAuth} from "./AuthProvider";
export const AppContext = React.createContext(null);

const AppProvider = ({children}) => {
    const [isPdoc, setIsPdoc] = useState(false);
    const [loadingProfileDoc, setLoadingProfileDoc] = useState(true);
    const {
    IsProfileDoc,
    user,
  } = useAuth();

  useEffect(() => {
    console.log("<------------- APPPROVIDER ---------------->");
    let profileDoc = IsProfileDoc(user).then(res => {
      if(res){
        console.log("--- Profile Doc présent, heading to MapStack");
        setIsPdoc(true);
        setLoadingProfileDoc(false);
      } else {
        setLoadingProfileDoc(false);
      }
    }).catch(error => {
        console.log("--- !!!ERREUR dans le UseEffect du AppProvider", JSON.stringify(error));
        setLoadingProfileDoc(false);
    });

    return () => {};
  }, []);

  return(
      <AppContext.Provider
          value={{
              isPdoc,
              setIsPdoc,
              loadingProfileDoc,
              setLoadingProfileDoc
          }}
      >
          {children}
      </AppContext.Provider>
  );
} ;

const useAppContext = () => {
  //Valeurs du AuthProvider
    const Context = useContext(AppContext);

  return Context;
};

export { useAppContext };
export default AppProvider;
