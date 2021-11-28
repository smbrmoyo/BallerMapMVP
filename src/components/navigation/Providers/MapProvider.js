import React, { useContext, useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import Geocoder from "react-native-geocoding";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useQuery } from "react-query";
import * as Location from "expo-location";

import {
  getPlacesList,
  createPlace,
} from "../../../aws-functions/placeFunctions";
import { getAllUserProfiles } from "../../../aws-functions/userFunctions";
import { useAuth, getUprofile } from "./AuthProvider";
import placesJSON from "../../../assets/data/placesJSON";

export const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const { user } = useAuth();
  //const [colorScheme, SetColorScheme] = useState(Appearance.getColorScheme());
  const [places, setPlaces] = useState([]);
  const [status, setStatus] = useState("loading");
  const [camera, setCamera] = useState(null);
  const [users, setUsers] = useState([]);
  // Geocoder.init("AIzaSyCAWRoRAT1jDaCuwACpmYsseOgW1-_XrNg");

  const getCamera = async () => {
    let location = await Location.getLastKnownPositionAsync().catch((err) =>
      console.log(err)
    );
  };

  const resultPlaces = useQuery("getPlaces", getPlacesList);
  const resultCamera = useQuery("getCamera", getCamera);
  const resultUsers = useQuery("getUsers", getAllUserProfiles);

  /*useEffect(() => {
    Geocoder.from("Rue du colisé 54, 75008 Paris")
      .then((json) => {
        var location = json.results[0].geometry.location;
        console.log(location);
        let input = {
          name: "Coliseum",
          address: "Rue du colisé 54, 75008 Paris",
          coords: {
            lat: json.results[0].geometry.location.lat,
            long: json.results[0].geometry.location.lng,
          },
        };
        createPlace(input).then((res) => console.log(res));
      })
      .catch((error) => console.warn(error));
  }, []);*/

  useEffect(() => {
    if (
      resultPlaces.status == "success" &&
      resultCamera.status == "success" &&
      resultUsers.status == "success"
    ) {
      setPlaces(resultPlaces.data);
      setCamera(resultCamera.data);
      setUsers(resultUsers.data);
      setStatus(resultPlaces.status);
    } else {
      setStatus(resultPlaces.status);
    }
  }, [resultPlaces.status, resultUsers.status]);

  let counter = 1;

  /*useEffect(() => {
    if (counter == 1) {
      placesJSON.map((place, i) => {
        if (i > 16 && i < 22) {
          Geocoder.from(place.address)
            .then((json) => {
              var location = json.results[0].geometry.location;
              if (location == undefined) {
                Alert.alert("errer");
              }
              let input = {
                name: place.name,
                address: place.address,
                coords: {
                  lat: json.results[0].geometry.location.lat,
                  long: json.results[0].geometry.location.lng,
                },
              };
              createPlace(input).then((res) => console.log(res));
            })
            .catch((error) => console.warn(error));
        }
      });
    }
    counter = 2;
  }, []);*/

  return (
    <MapContext.Provider
      value={{
        places,
        setPlaces,
        status,
        camera,
        setCamera,
        users,
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
            var location = json.resultPlacess[0].geometry.location;
            console.log(location);
            console.log(place.name);
            let input = {
              name: place.name,
              address: place.address,
              coords: {
                lat: json.resultPlacess[0].geometry.location.lat,
                long: json.resultPlacess[0].geometry.location.lng,
              },
            };
            // createPlace(input).then((res) => console.log(res));
          })
          .catch((error) => console.warn(error));
      }
    }); */

// Charge les données sur les places
/*useEffect(() => {
    getPlaces().then((resultPlaces) => setPlaces(resultPlaces));

    const placesUpdate = setInterval(() => {
      getPlaces().then((resultPlaces) => setPlaces(resultPlaces));
    }, 1800000);
    return () => {
      clearInterval(placesUpdate);
      setPlaces(null);
    };
  }, []);*/
