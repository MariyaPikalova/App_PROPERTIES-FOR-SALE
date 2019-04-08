import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import '../styles/index.css';


class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-main">
          <h1> PROPERTIES FOR SALE IN ENGLAND</h1>
          <ul className="navigation">
            <li>
              <NavLink to="/">
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to="favorites">
                FAVORITES: {this.props.favorites.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favoritesList.favorites
});

export default connect(mapStateToProps)(Header);
