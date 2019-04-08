import _ from "lodash";

import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  FAVORITES_STORAGE
} from "../actions/PageActions";

const initialState = {
  favorites: [],
  inFavorites: false
};

const favoritesList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (state.favorites.some(fav => _.isEqual(fav, action.payload))) {
        return {
          ...state,
          favorites: state.favorites.filter(
            fav => !_.isEqual(fav, action.payload)
          ),
          inFavorites: !state.inFavorites
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        inFavorites: !state.inFavorites
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload),
        inFavorites: !state.inFavorites
      };
    case FAVORITES_STORAGE:
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
};

export default favoritesList;
