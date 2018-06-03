import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib";
import { pickToppings } from "../actions/actions";
import store from "../store";

export class PizzaTopping extends PureComponent {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
    store.dispatch(pickToppings({ value: event.target.value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Topping </h2>
        <h3> max 3 toppings, toppings cost € 0,50 each </h3>

        {pizzaToppings.map(topping => (
          <label key={topping.name}>
            <input
              name="topping"
              type="checkbox"
              value={topping.price}
              //checked={this.state.value === topping}
              onChange={this.handleChange}
            />
            {topping.name} ${topping.price} <br />
          </label>
        ))}
      </div>
    );
  }
}

export default connect(null, { pickToppings })(PizzaTopping);
