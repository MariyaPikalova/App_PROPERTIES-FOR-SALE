import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import getCity from "./getCity";
import listOfCards from './listOfCards';
import getKeyLink from './getKeyLink';
import countOfCards from './countOfCards';
import buttonMore from './buttonMore';
import favoritesList from './favoritesList';

const rootReducer = combineReducers({
  listOfCards,
  getCity,
  countOfCards,
  getKeyLink,
  buttonMore,
  favoritesList
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
