import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext, useAuth } from "./AuthProvider";

export const ActivityContext = React.createContext(null);

const ActivityProvider = ({ children }) => {
  const { IsProfileDoc, user } = useAuth();

  useEffect(() => {
    console.log("<------------- ACTIVITYPROVIDER ---------------->");
  }, []);

  return (
    <ActivityContext.Provider value={{}}>{children}</ActivityContext.Provider>
  );
};

const useAppContext = () => {
  //Valeurs du AuthProvider
  const Context = useContext(AppContext);

  return Context;
};

export { useAppContext };
export default AppProvider;
