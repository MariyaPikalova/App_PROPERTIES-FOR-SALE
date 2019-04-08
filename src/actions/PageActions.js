import fetchJsonp from "fetch-jsonp";
import { store } from "../reducers";

export const GET_CITY = "GET_CITY";
export const GET_LIST_CARDS = "GET_LIST_CARDS";
export const GET_KEY_LINK = "GET_KEY_LINK";
export const SHOW_BUTTON_MORE = "SHOW_BUTTON_MORE";
export const INCREMENT_MORE = "INCREMENT_MORE";
export const FAVORITES_STORAGE = "FAVORITES_STORAGE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";

export const showButtonMore = () => ({
  type: SHOW_BUTTON_MORE
});

const addKeyLink = index => ({
  type: GET_KEY_LINK,
  payload: index
});

export const incrementMore = () => ({ type: INCREMENT_MORE });

export const addToFavorites = card => ({
  type: ADD_TO_FAVORITES,
  payload: card
});

const deleteFromFavorites = card => ({
  type: DELETE_FROM_FAVORITES,
  payload: card
});

export const getCity = city => ({
  type: GET_CITY,
  payload: city
});

export const addCard = card => {
  return dispatch => {
    dispatch(addToFavorites(card));
    localStorage.setItem("favorites", JSON.stringify(store.getState()));
  };
};

export const deleteCard = card => {
  return dispatch => {
    dispatch(deleteFromFavorites(card));
    localStorage.setItem("favorites", JSON.stringify(store.getState()));
  };
};

export const getKeyLink = index => {
  return dispatch => {
    dispatch(addKeyLink(index));
  };
};

export const getListCards = list => ({
  type: GET_LIST_CARDS,
  payload: list
});

export const favoritesStorage = favorites => ({
  type: FAVORITES_STORAGE,
  payload: favorites
});

export const fetchCards = (listCount, city) => {
  return dispatch => {
    return fetchJsonp(
      "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&number_of_results=" +
      listCount +
      "&listing_type=buy&place_name=" +
      city
    )
      .then(response => response.json())
      .then(data => {
        const list = data.response.listings.map(list => list);
        dispatch(getListCards(list));
        dispatch(showButtonMore());
      })
      .catch(error => console.log("error is", error));
  };
};
