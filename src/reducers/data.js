import { GET_LOCATIONS, GET_WORLD_DATA } from "../actions/types";

const initialState = {
  locations: null,
  worldData: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: payload
      };
    case GET_WORLD_DATA:
      return {
        ...state,
        worldData: payload
      };
    default:
      return state;
  }
}
