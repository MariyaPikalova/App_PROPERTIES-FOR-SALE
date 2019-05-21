//@flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import ButtonLike from "./ButtonLike";
import ButtonMore from "./ButtonMore";
import {
  incrementMore,
  getListCards,
  addCard,
  getCity,
  getKeyLink,
  fetchCards,
  favoritesStorage
} from "../actions/PageActions";

type Props = {
  listCards: Object,
  favorites: Array<Object>,
  card: Object,
  favoritesStorage: Object,
  incrementMore: Function,
  fetchCards: Function,
  city: String,
  addCard: Function,
  listCount: Number,
  getKeyLink: Function,
  getCity: Function
}

class List extends Component<Props> {

  componentDidMount() {
    const { favoritesStorage } = this.props;

      const persistedState = JSON.parse(localStorage.getItem("favorites") || '{}');
      if (persistedState) {
        favoritesStorage(persistedState.favoritesList.favorites);
      }

  }

  listCardsRender = (card, index) => {
    const { img_url, title, price_formatted, summary } = card;
    const { favorites } = this.props;
    return (
      <li className="gallery-item"
          key={index}>
        <NavLink to="/details"
                 onClick={this.onGetKeyLink(index)}>
          <img src={img_url}
               alt="house"
          />
        </NavLink>
        <div>
          <p>{title}</p>
          <p>{price_formatted}</p>
          <p>{summary}</p>
        </div>
        <ButtonLike
          onClick={this.handleButtonLike(card)}
          liked={favorites.some(fav => _.isEqual(fav, card))}
        />
      </li>
    );
  };
  handleSubmit = (event) => {
    const {  fetchCards, city } = this.props;
    event.preventDefault();
    fetchCards(8, city);
  };

  handleSubmitMore = () => {
    const { incrementMore, fetchCards, listCount, city } = this.props;
    incrementMore();
    fetchCards(listCount, city);
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>)=> {
    this.props.getCity(event.target.value);
  };

  handleButtonLike = card => () => {
    this.props.addCard(card);
  };

  onGetKeyLink = index => () => {
    this.props.getKeyLink(index);
  };

  render(){
    return (
      <div className="search-field">
      <div className="search-form">
        <h3>Choose your city in England :</h3>
            <input
              type="text"
              placeholder="Enter your city..."
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              SEARCH
            </button>
      </div>
        <div className="gallery-wrap">
          <ul className="gallery-list">{this.props.listCards.map(this.listCardsRender)}</ul>
        </div>
        <ButtonMore onClick={this.handleSubmitMore} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listCards: state.listOfCards.listCards,
  listCount: state.countOfCards.listCount,
  city: state.getCity.city,
  buttonMore: state.buttonMore.buttonMore,
  favorites: state.favoritesList.favorites,
  inFavorites: state.favoritesList.inFavorites
});

const mapDispatchToProps = dispatch => ({
  getListCards: params => dispatch(getListCards(params)),
  fetchCards: (count, city) => dispatch(fetchCards(count, city)),
  getCity: params => dispatch(getCity(params)),
  addCard: card => dispatch(addCard(card)),
  getKeyLink: params => dispatch(getKeyLink(params)),
  incrementMore: () => dispatch(incrementMore()),
  handleButtonLike: card => dispatch(addCard(card)),
  favoritesStorage: params => dispatch(favoritesStorage(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
