import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";
import LoadingScreen from "../../screens/LoadingScreen/index.js"
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AppProvider from "./Providers/AppProvider"

const Routes = () => {
  const {user, loadingUser} = useAuth();

  useEffect(() => {
    console.log("<------------- Routes ---------------->")
  })

  return (
      <NavigationContainer>
        {loadingUser? <LoadingScreen/> : (user ?
            <AppProvider><AppStack/></AppProvider> : <AuthStack/>)}
      </NavigationContainer>
  );
}

export default Routes;

/*{user ? <AppStack /> : <AuthStack />} */
