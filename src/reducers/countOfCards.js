import { INCREMENT_MORE} from "../actions/PageActions";

const initialState = {
  listCount: 12
};

const listOfHouses = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_MORE:
      return {
        ...state,
        listCount: state.listCount + 4
      };
    default:
      return state;
  }
};

export default listOfHouses;
