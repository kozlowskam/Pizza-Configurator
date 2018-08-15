import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib";
import { pickToppings, deleteTopping } from "../actions/actions";
import store from "../store";
import "../App.css";

export class PizzaTopping extends PureComponent {
  constructor() {
    super();

    this.state = { value: [] };
  }

  handleChange = event => {
    if (event.target.checked) {
      store.dispatch(pickToppings(event.target.value));
      console.log(event.target.value);
    } else {
      console.log("deleting" + event.target);
      store.dispatch(deleteTopping(event.target.value));
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form
          value={this.state.value}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <h2> Pick your Pizza Topping € 0,50 each </h2>
          {/* {pizzaToppings.map(topping => (
            <label key={topping.name}>
              <input type="checkbox" value={topping.name} />
              {topping.name}
              <br />
            </label>
          ))} */}
          <input type="checkbox" value={pizzaToppings[0].name} />
          <label>
            {pizzaToppings[0].name}
            <img className="topping-img" src={require("../pinaple.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[1].name} />
          <label>
            {pizzaToppings[1].name}
            <img className="topping-img" src={require("../corn.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[2].name} />
          <label>
            {pizzaToppings[2].name}
            <img className="topping-img" src={require("../olive.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[3].name} />
          <label>
            {pizzaToppings[3].name}
            <img className="topping-img" src={require("../onion.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[4].name} />
          <label>
            {pizzaToppings[4].name}
            <img className="topping-img" src={require("../spinach.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[5].name} />
          <label>
            {pizzaToppings[5].name}
            <img className="topping-img" src={require("../tomato.png")} />
          </label>{" "}
          <br />
          <input type="checkbox" value={pizzaToppings[6].name} />
          <label>
            {pizzaToppings[6].name}
            <img className="topping-img" src={require("../chicken.png")} />
          </label>
          <br />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { pickToppings, deleteTopping }
)(PizzaTopping);
