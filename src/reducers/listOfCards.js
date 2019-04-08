import { GET_LIST_CARDS } from "../actions/PageActions";

const initialState = {
  listCards: []
};

const listOfCards = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CARDS:
      return {
        ...state,
        listCards: action.payload
      };
    default:
      return state;
  }
};

export default listOfCards;
