import React, { Component } from "react";
import "../App.css";
import { PizzaBase } from "./PizzaBase";
import { PizzaSauce } from "./PizzaSauce";
import { PizzaTopping } from "./PizzaTopping";
import Total from "./total";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Pizza extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("../pizza_header2.png")} />
        <img className="header-img" src={require("../welcome.png")} />

        <PizzaBase />
        <PizzaSauce />
        <PizzaTopping />

        <Total />
      </div>
    );
  }
}

export default Pizza;
