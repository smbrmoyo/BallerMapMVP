import React, { useContext, useEffect, useState } from "react";
//import Realm from "realm";
import { useAuth } from "./AuthProvider";
import { getFilteredEvents } from "../../aws-functions/eventFunctions";

export const EventsContext = React.createContext();

const EventsProvider = ({ children }) => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  //const result = useQuery("getProfile", getUprofileDoc(user));

  /*useEffect(() => {
        if (result.status != status) {
          setProfileDoc(result.data);
          setStatus(result.status);
        } else {
          setStatus(result.status);
        }
      }, [result.status]);*/
  useEffect(() => {
    getFilteredEvents(user).then((response) => {
      setEvents(response);
      setLoading(false);
    });
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        loading,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useEvents = () => {
  //Valeurs du AuthProvider
  const events = useContext(EventsContext);
  if (events == null) {
    throw new Error("useProfile() called outside of a ProfileProvider?");
  }
  return events;
};

export { EventsProvider, useEvents };
