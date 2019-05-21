//@flow
import { SHOW_BUTTON_MORE } from "../actions/PageActions";



const initialState = {
  buttonMore: false
};
type State = {+buttonMore: boolean}
type Action = {type: "SHOW_BUTTON_MORE"}


const buttonMore = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_BUTTON_MORE:
      return {
        ...state,
        buttonMore: true
      };
    default:
      return state;
  }
};

export default buttonMore;
