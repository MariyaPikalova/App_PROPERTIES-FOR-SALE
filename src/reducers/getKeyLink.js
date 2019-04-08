import { GET_KEY_LINK } from "../actions/PageActions";

const initialState = {
  keyIndexLink: 0
};

const getKeyLink = (state = initialState, action) => {
  switch (action.type) {
    case GET_KEY_LINK:
      return {
        ...state,
        keyIndexLink: action.payload
      };
    default:
      return state;
  }
};

export default getKeyLink;
