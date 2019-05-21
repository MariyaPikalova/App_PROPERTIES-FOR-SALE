import React, { Component } from "react";
import '../styles/index.css';
import image from "../icons/images.jpeg";




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
