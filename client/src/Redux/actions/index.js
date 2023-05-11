import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_CONTINENT,
  ORDER_ALPHABETIC,
  ORDER_POPULATION,
  ADD_ACTIVITY,
  GET_COUNTRY_DETAIL_BY_ID,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES_BY_SEASON,
  GET_ACTIVITIES_FILTERED,
  FILTER_COUNTRIES_BY_SEASON,
} from "../action-types/index.js";
import axios from "axios";
const {
  REACT_APP_GET_ALL_COUNTRIES_URL,
  REACT_APP_GET_COUNTRY_BY_NAME_URL,
  REACT_APP_GET_COUNTRY_DETAIL,
  REACT_APP_GET_ALL_ACTIVITIES,
} = process.env;

export function getCountries() {
  return async function (dispatch) {
    let response = await axios.get(REACT_APP_GET_ALL_COUNTRIES_URL);
    return dispatch({
      type: GET_COUNTRIES,
      payload: response.data,
    });
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      const nombre = await axios.get(REACT_APP_GET_COUNTRY_BY_NAME_URL + name);
      if (nombre.status === 200 || nombre.status === 304) {
        return dispatch({ type: GET_COUNTRY_BY_NAME, payload: nombre.data });
      }
    } catch (err) {
      alert("Country not found");
    }
  };
}

export function getCountryDetailById(id) {
  return async function (dispatch) {
    return await axios
      .get(REACT_APP_GET_COUNTRY_DETAIL + id)
      .then((resp) => resp.data)
      .then((resp) => {
        dispatch({ type: GET_COUNTRY_DETAIL_BY_ID, payload: resp });
      })
      .catch((err) => console.log(err));
  };
}

export function filterByContinent(payload) {
  return function (dispatch) {
    try {
      dispatch({ type: FILTER_CONTINENT, payload });
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterBySeason(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_COUNTRIES_BY_SEASON, payload });
  };
}

export function orderAlphabetic(payload) {
  return function (dispatch) {
    try {
      dispatch({ type: ORDER_ALPHABETIC, payload });
    } catch (err) {
      console.log(err);
    }
  };
}

export function orderPopulation(payload) {
  return function (dispatch) {
    try {
      dispatch({ type: ORDER_POPULATION, payload });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addActivity(data) {
  return async function (dispatch) {
    return await axios
      .post(REACT_APP_GET_ALL_ACTIVITIES, data)
      .then((response) => response.data)
      .then((response) => {
        dispatch({ type: ADD_ACTIVITY, payload: response });
        alert("Activity created");
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, we could not create any activity", "Error" + err);
      });
  };
}

export function getActivities() {
  return async function (dispatch) {
    let response = await axios.get(REACT_APP_GET_ALL_ACTIVITIES);
    return dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
}

export function filterActivitiesBySeason(payload) {
  return function (dispatch) {
    try {
      dispatch({ type: FILTER_ACTIVITIES_BY_SEASON, payload });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getActivitiesFiltered(payload) {
  console.log(payload);
  return function (dispatch) {
    try {
      dispatch({ type: GET_ACTIVITIES_FILTERED, payload });
    } catch (err) {
      console.log(err);
    }
  };
}
