//@flow
import { GET_CITY } from "../actions/PageActions";

const initialState = {
  city: ""
};
type State = {
    city: string
}

const getCity = (state:State = initialState, action: any) => {
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
