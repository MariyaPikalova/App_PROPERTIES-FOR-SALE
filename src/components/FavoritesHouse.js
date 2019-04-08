import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/PageActions';
import imageDelete from '../icons/delete.png';

export class FavoritesHouses extends Component {

  handleDeleteCard = card => () => {
    this.props.deleteCard(card);
  };

  favoritesRender = (card, index) => {
    const {
      img_url,
      title,
      price_formatted,
      summary,
      bedroom_number,
      bathroom_number,
      datasource_name,
      keywords
    } = card;

    return (
      <li className="gallery-item" key={index}>
        <div className="">
          <img className="" src={img_url} alt="house" />
        </div>

        <div className="card-description">
          <p>{title}</p>
          <p>{price_formatted}</p>
          <p>{summary}</p>
          <p>
            Bathroom
            {bathroom_number ? card.bathroom_number : "1"}
          </p>
          <p>Bedroom: {bedroom_number}</p>
          <p>Seller: {datasource_name}</p>
          <p>{keywords}</p>
        </div>
        <div className="button-delete"
             onClick={this.handleDeleteCard(card)}
        >
          <img className="image-delete"
               src={imageDelete}
               alt="house_delete"
          />
        </div>
      </li>
    );
  };

  render() {
    return (
    <div className="gallery-wrap">
      <ul className="gallery-list">{this.props.favorites.map(this.favoritesRender)}</ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favoritesList.favorites
});

const mapDispatchToProps = dispatch => ({
  deleteCard: card => dispatch(deleteCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesHouses);
