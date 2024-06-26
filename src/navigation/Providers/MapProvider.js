import React, { useContext, useEffect, useState } from "react";
import Geocoder from "react-native-geocoding";
import { useQuery } from "react-query";
import * as Location from "expo-location";

import { getPlacesList } from "../../aws-functions/placeFunctions";
import {
  getAllUserProfiles,
  getUprofileDoc,
  updateCityCountry,
} from "../../aws-functions/userFunctions";
import { useAuth } from "./AuthProvider";

export const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const { user } = useAuth();
  //const [colorScheme, SetColorScheme] = useState(Appearance.getColorScheme());
  const [places, setPlaces] = useState([]);
  const [status, setStatus] = useState("loading");
  const [camera, setCamera] = useState(null);
  const [users, setUsers] = useState([]);
  Geocoder.init("AIzaSyCAWRoRAT1jDaCuwACpmYsseOgW1-_XrNg");

  const getCamera = async () => {
    let location = await Location.getLastKnownPositionAsync()
      .then((position) => {
        Geocoder.from({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }).then((json) => {
          let result = json.results[0].address_components;
          let cityCountry;

          for (var i = 0; i < result.length; i++) {
            if (
              result[i].types[0] == "administrative_area_level_3" &&
              result[i].types[1] == "political"
            ) {
              cityCountry = result[i].long_name;
            }
            if (
              result[i].types[0] == "country" &&
              result[i].types[1] == "political"
            ) {
              cityCountry = cityCountry + ", " + result[i].long_name;
              updateCityCountry({ id: user, cityCountry: cityCountry });
              break;
            }
          }
        });
      })
      .catch((err) => console.log(err));
  };

  const resultPlaces = useQuery("getPlaces", getPlacesList);
  const resultCamera = useQuery("getCamera", getCamera);
  const resultUsers = useQuery("getUsers", getAllUserProfiles);

  /*useEffect(() => {
      Geocoder.from("Gerbermühlstraße 110, Frankfurt am Main")
        .then((json) => {
          var location = json.results[0].geometry.location;
          let input = {
            name: "Mainufer",
            address: "Gerbermühlstraße 110, Frankfurt am Main",
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
    getUprofileDoc(user).then((response) => {
      setUsers(response.following.items);
    });

    if (resultPlaces.status == "success" && resultCamera.status == "success") {
      setPlaces(resultPlaces.data);
      setCamera(resultCamera.data);
      setStatus(resultPlaces.status);
    } else {
      setStatus(resultPlaces.status);
    }
  }, [resultPlaces.status]);

  /*useEffect(() => {
      if (counter == 1) {
        placesJSON.map((place, i) => {
          if (i > 16 && i < 22) {
            Geocoder.from(place.address)
              .then((json) => {
                var location = json.results[0].geometry.location;
                if (location == undefined) {
                  Alert.alert("error from Geocoder");
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
