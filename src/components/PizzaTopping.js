import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib";
import { pickToppings, deleteTopping } from "../actions/actions";
import store from "../store";

export class PizzaTopping extends PureComponent {
  constructor() {
    super();

    this.state = { value: [] };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ value: event.target.value });
    store.dispatch(pickToppings({ value: event.target.value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Topping </h2>
        <h3> max 3 toppings, € 0,50 each </h3>
        <form>
          {pizzaToppings.map(topping => (
            <label key={topping.name}>
              <input
                name="topping"
                type="checkbox"
                value={topping.price}
                checked={this.state.topping}
                onChange={this.handleChange}
              />
              {topping.name} <br />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(null, { pickToppings })(PizzaTopping);
