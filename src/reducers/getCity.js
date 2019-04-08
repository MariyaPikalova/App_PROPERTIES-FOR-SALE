import { GET_CITY } from "../actions/PageActions";

const initialState = {
  city: ""
};

const getCity = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
};

export default getCity;
