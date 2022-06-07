import { Auth, API, graphqlOperation } from "aws-amplify";

import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

/*
 * =============================================================================
 *                                  QUERIES
 * =============================================================================
 */

/**
 * @description gets a place
 * @param {ID} id id of the place
 * @returns {JSON} Object Place
 */
export const getPlace = async (id) => {
  try {
    let place = await API.graphql(
      graphqlOperation(queries.getPlace, {
        input: { id: id },
      })
    );

    return place.data.getPlace;
  } catch (error) {
    console.log("Error in getPlace: " + JSON.stringify(error));
  }
};

/**
 * @description get all places documents
 * @param {Object} filterInput
 * @param {Int} limit
 * @param {String} nextToken
 * @returns {JSON} list of places
 */
export const getPlacesList = async (filterInput, limit, nextToken) => {
  try {
    let placesList = await API.graphql(
      graphqlOperation(queries.listPlaces, { filterInput, limit, nextToken })
    );

    return placesList.data.listPlaces.items;
  } catch (error) {
    console.log("Error in getPlacesList: " + JSON.stringify(error));
  }
};

/**
 * @description get filtered places
 * @param {JSON} filter ({ field1: value1, ... })
 * @param {Integer} limit maximum number of docs to fetch
 * @returns {JSON} list of filtered places
 */
export const getFilteredPlaces = async (filter, limit) => {
  try {
    let placesList = await API.graphql(
      graphqlOperation(queries.listPlaces, {
        filter,
        limit,
      })
    );
    return placesList.data.listPlaces.items;
  } catch (error) {
    console.log("Error in getFilteredPlaces: " + JSON.stringify(error));
  }
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
  try {
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
  } catch (error) {
    console.log("Error in createPlace: " + JSON.stringify(error));
  }
};

/**
 * @description update place
 * @param {JSON} place object with place fields (address, name, coordinate)
 */
export const updatePlace = async (place) => {
  try {
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
  } catch (error) {
    console.log("Error in updatePlace: " + JSON.stringify(error));
  }
};
