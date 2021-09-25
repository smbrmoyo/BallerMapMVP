import React, { useContext, useState, useEffect, useRef } from "react";
//import Realm from "realm";
import { useAuth, getUprofile } from "./AuthProvider";
import placesForty from "../../../assets/data/placesForty";
import placesJSON from "../../../assets/data/placesJSON";
import Geocoder from "react-native-geocoding";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createPlace,
  getPlacesList,
} from "../../../aws-functions/placeFunctions";
import { useQuery } from "react-query";

import * as queries from "../../../graphql/queries";

export const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const { user } = useAuth();
  const [places, setPlaces] = useState([]);
  const [status, setStatus] = useState("loading");
  const [render, setRender] = useState(0);
  // Geocoder.init("AIzaSyCAWRoRAT1jDaCuwACpmYsseOgW1-_XrNg");

  const queryClient = useQuery();

  const result = useQuery("getPlaces", getPlacesList);

  useEffect(() => {
    if (result.status != status) {
      setPlaces(result.data);
      console.log(places.length);
      setStatus(result.status);
    } else {
      setStatus(result.status);
    }
  }, [result.status]);

  return (
    <MapContext.Provider
      value={{
        places,
        status,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

const useMap = () => {
  const map = useContext(MapContext);
  if (map == null) {
    throw new Error("useMap() called outside of a AuthProvider?");
  }
  return map;
};

export { MapProvider, useMap };

/*

Function to check location

for (let i = 0; i < places.length; i++) {
    let coords = {
      latitude: places[i].coordinate.latitude,
      longitude: places[i].coordinate.longitude,
    };
    console.log(haversine(MaxCoords, coords, { threshold: 7, unit: "mile" }));
    console.log(i);
  }*/

/*
  Function to create a place and add it to the db
  
  */

/*placesJSON.map((place, i) => {
      if (i == 39) {
        Geocoder.from(place.name)
          .then((json) => {
            var location = json.results[0].geometry.location;
            console.log(location);
            console.log(place.name);
            let input = {
              name: place.name,
              address: place.address,
              coords: {
                lat: json.results[0].geometry.location.lat,
                long: json.results[0].geometry.location.lng,
              },
            };
            // createPlace(input).then((res) => console.log(res));
          })
          .catch((error) => console.warn(error));
      }
    }); */

// Charge les données sur les places
/*useEffect(() => {
    getPlaces().then((result) => setPlaces(result));

    const placesUpdate = setInterval(() => {
      getPlaces().then((result) => setPlaces(result));
    }, 1800000);
    return () => {
      clearInterval(placesUpdate);
      setPlaces(null);
    };
  }, []);*/
