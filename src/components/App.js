import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FavoritesHouses from './FavoritesHouse';
import Details from './Details';
import Header from './Header';
import List from './List';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route  path="/" exact component={List} />
        <Route  path="/favorites" exact component={FavoritesHouses} />
        <Route  path="/details" exact component={Details} className="details-card" />
      </div>
    );
  }
}

export default App;