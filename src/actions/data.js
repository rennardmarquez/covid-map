import axios from "axios";
import { GET_LOCATIONS, GET_WORLD_DATA } from "./types";

export const getLocations = () => async dispatch => {
  const res = await axios.get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
  );

  dispatch({
    type: GET_LOCATIONS,
    payload: res.data.locations
  });
};

export const getWorldData = () => async dispatch => {
  const res = await axios.get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/latest"
  );

  dispatch({
    type: GET_WORLD_DATA,
    payload: res.data.latest
  });
};
