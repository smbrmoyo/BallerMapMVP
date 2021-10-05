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

export const getPlaces = async (id) => {
  let place = await API.graphql(
    graphqlOperation(queries.getPlace, {
      input: { id: id },
    })
  );

  return place.data.getPlace;
};

export const getPlacesList = async (filterInput, limit, nextToken) => {
  let placesList = await API.graphql(
    graphqlOperation(queries.listPlaces, { filterInput, limit, nextToken })
  );

  return placesList.data.listPlaces.items;
};

/**
 * @description get all places documents
 * @param {JSON} filter ({ field1: value1, ... })
 * @param {Integer} limit maximum number of docs to fetch
 * @returns array of places docs
 */
export const getFilteredPlaces = async (filter, limit) => {
  let placesList = await API.graphql(
    graphqlOperation(queries.listPlaces, {
      filter,
      limit,
    })
  );
  return placesList.data.listPlaces.items;
};

/*
 * =============================================================================
 *                                  MUTATIONS
 * =============================================================================
 */

/**
 * @description create place
 * @param {JSON} place object with place fields (address, name, coordinate)
 */
export const createPlace = async (place) => {
  let placeDoc = await API.graphql(
    graphqlOperation(mutations.createPlace, {
      input: {
        address: place.address,
        name: place.name,
        coordinate: {
          latitude: place.coordinates.lat,
          longitude: place.coordinates.long,
        },
      },
    })
  );
  return placeDoc;
};

/**
 * @description update place
 * @param {JSON} place object with place fields (address, name, coordinate)
 */
export const updatePlace = async (place) => {
  let placeDoc = await API.graphql(
    graphqlOperation(mutations.updateEvent, {
      input: {
        id: place.id,
        address: place.address,
        name: place.name,
        coordinate: {
          latitude: place.coordinates.lat,
          longitude: place.coordinates.long,
        },
      },
    })
  );
  return placeDoc;
};

/*
 * =============================================================================
 *                                  SUBSCRIPTIONS
 * =============================================================================
 */
