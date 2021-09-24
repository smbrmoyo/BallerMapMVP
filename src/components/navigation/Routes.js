import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./Providers/AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
