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
      <div>
        <form
          value={this.state.value}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <h2> Pick your Pizza Topping € 0,50 each </h2>

          {pizzaToppings.map(topping => (
            <label key={topping.name}>
              <input type="checkbox" value={topping.name} />
              {topping.name}
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { pickToppings, deleteTopping }
)(PizzaTopping);
