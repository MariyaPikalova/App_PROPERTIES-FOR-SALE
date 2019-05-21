//@flow

import React, { Component } from "react";
import { connect } from "react-redux";


type Props = {
  listCards: Object,
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void
}


class ButtonMore extends Component<Props> {
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
