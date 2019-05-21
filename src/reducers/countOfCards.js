//@flow
import { INCREMENT_MORE} from "../actions/PageActions";

const initialState = {
  listCount: 12
};

type State = {+listCount: number}
type Action = {type: "INCREMENT_MORE"}

const listOfHouses = (state: State = initialState, action:Action) => {
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
