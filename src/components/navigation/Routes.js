import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = () => {
  // const { user, setUser } = useAuth();
  const user = true;
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    //  setUser(user);
    if (initializing) setInitializing(false);
  };

  /*useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);*/

  //if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

/*      {user ? <AppStack /> : <AuthStack />}
 */
