import React, { Component } from "react";
import { connect } from "react-redux";

class ButtonMore extends Component {
  render() {
    if (!this.props.listCards.length) {
      return null;
    }
    return (
      <button onClick={this.props.onClick}>MORE</button>
    );
  }
}
const mapStateToProps = state => ({
  listCards: state.listOfCards.listCards
});
export default connect(mapStateToProps)(ButtonMore);
