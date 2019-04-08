import { SHOW_BUTTON_MORE } from "../actions/PageActions";

const initialState = {
  buttonMore: false
};

const buttonMore = (state = initialState, action) => {
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
