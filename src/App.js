import React, { Component } from "react";
import "./App.css";
import { PizzaBase } from "./components/PizzaBase";
import { PizzaSauce } from "./components/PizzaSauce";
import { PizzaTopping } from "./components/PizzaTopping";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("./pizza_header2.png")} />
        <header className="App-header">
          <h1 className="App-title"> NewAgePizza </h1>
        </header>
        <PizzaBase />
        <PizzaSauce />
        <PizzaTopping />
      </div>
    );
  }
}

export default App;