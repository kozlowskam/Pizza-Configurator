import React, { Component } from "react";
import "../App.css";

class Order extends Component {
  render() {
    return (
      <div>
        <img src={require("../pizza_header2.png")} />
        <img className="header-img" src={require("../order2_img.png")} />

        <img src={require("../pizzaCala_logo.png")} id="App-logo" />
      </div>
    );
  }
}

export default Order;
