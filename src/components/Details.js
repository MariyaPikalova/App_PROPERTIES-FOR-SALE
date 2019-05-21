//@flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCard } from '../actions/PageActions';
import ButtonLike from '../components/ButtonLike';
import {type FavoritesCard} from '../interfaces';
const _ = require('lodash');

import '../styles/index.css';

type Props = {
  addCard: Function,
  listCards: FavoritesCard,
  index: number,
  favorites: Array<any>,
  handleAddCard: Function,
}

class Details extends Component<Props> {

  handleAddCard = card => () => {
    this.props.addCard(card);
  };

  render() {
    const { listCards, index, favorites } = this.props;
    if (!listCards[index]) {
      return <Redirect to="/" />;
    }

    const {
      img_url,
      title,
      price_formatted,
      summary,
      bathroom_number,
      bedroom_number,
      datasource_name,
      keywords
    } = listCards[index];

    return (
      <div className="details-card">
              <div>
                <img className=""
                     src={img_url}
                     alt="house"
                />
              </div>
              <div className="description-card">
                <h3>{title}</h3>
                <p>Price: {price_formatted}</p>
                <p>Description: {summary}</p>
                <p>Bathroom: {bathroom_number ? bathroom_number : "1"}</p>
                <p>Bedroom: {bedroom_number}</p>
                <p>Source name: {datasource_name}</p>
                <p>Keywords: {keywords}</p>
              </div>
        <ButtonLike
          onClick={this.handleAddCard(listCards[index])}
          liked={favorites.some(fav =>_.isEqual(fav, listCards[index]))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listCards: state.listOfCards.listCards,
  index: state.getKeyLink.keyIndexLink,
  favorites: state.favoritesList.favorites
});

const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
