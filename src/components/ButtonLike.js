import React, { Component } from "react";
import image from "../icons/images.jpeg";
import '../styles/index.css';

export default class ButtonLike extends Component {
  render() {
    return (
      <div className="button-like"
           onClick={this.props.onClick}
      >
        <img src={image} alt="house_image" />
      </div>
    );
  }
}
