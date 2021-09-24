import React, { useContext, useState, useEffect, useRef } from "react";
//import Realm from "realm";
import { useAuth, getUprofile } from "./AuthProvider";
import placesJSON from "../../../assets/data/placesJSON";
import Geocoder from "react-native-geocoding";

export const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const { user } = useAuth();
  const [places, setPlaces] = useState([]);
  Geocoder.init("AIzaSyCAWRoRAT1jDaCuwACpmYsseOgW1-_XrNg");
  Geocoder.from(41.89, 12.49)
    .then((json) => {
      var addressComponent = json.results[0].address_components[0];
      console.log(addressComponent);
    })
    .catch((error) => console.warn(error));
  const getPlaces = async () => {
    //const placesRealm = await user.callFunction("getPlaces");
    const placesRealm = [];
    let temp = [];
    placesRealm.map((place) => {
      temp.push({
        _id: place._id,
        name: place.name,
        address: place.address,
        partition: place.partition,
        coordinate: {
          latitude: place.coordinates.lat,
          longitude: place.coordinates.long,
        },
      });
    });
    return temp;
  };

  /*for (let i = 0; i < places.length; i++) {
    let coords = {
      latitude: places[i].coordinate.latitude,
      longitude: places[i].coordinate.longitude,
    };
    console.log(haversine(MaxCoords, coords, { threshold: 7, unit: "mile" }));
    console.log(i);
  }*/

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

  useEffect(() => {});

  return (
    <MapContext.Provider
      value={{
        user,
        places,
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
