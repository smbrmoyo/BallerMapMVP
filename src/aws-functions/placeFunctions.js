import { Auth, API, graphqlOperation } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userConf from "./userConf";
import placesJSON from "../assets/data/placesJSON";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

/**
 * @description user's doc Id
 */

export const getPlacesList = async (filterInput, limit, nextToken) => {
  let placesList = await API.graphql(
    graphqlOperation(queries.listPlaces, { filterInput, limit, nextToken })
  );

  return placesList.data.listPlaces.items;
};

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create user doc
 * @param {JSON} place object with userDoc fields (address, name, coordinate)
 */

export const createPlace = async (place) => {
  let placeDoc = await API.graphql(
    graphqlOperation(mutations.createPlace, {
      input: {
        address: place.address,
        name: place.name,
        coords: {
          lat: place.coords.lat,
          long: place.coords.long,
        },
      },
    })
  );

  return placeDoc;
};

export const createUserDoc = async (userData) => {
  let userDoc = await API.graphql(
    graphqlOperation(mutations.createUserDoc, {
      input: {
        email: userData.email,
      },
    })
  );
  userConf.userDocId = userDoc.data.createUserDoc.id;

  AsyncStorage.setItem("userDocId", userDoc.data.createUserDoc.id);

  return userDoc;
};

/*
 * =============================================================================
 *                                  SUBSCRIPTIONS
 * =============================================================================
 */
