import { GET_LOCATIONS, GET_WORLD_DATA } from "../actions/types";
import { getSummary } from "../utils/data";

const initialState = {
  locations: null,
  summary: null,
  worldData: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: payload,
        summary: getSummary(payload).sort(
          (a, b) => b.latest.confirmed - a.latest.confirmed
        )
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
