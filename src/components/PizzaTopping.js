import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib";

export class PizzaTopping extends PureComponent {
  state = { value: "" };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> Pick your Pizza Topping </h2>
        <h3> max 3 toppings, toppings cost € 0,50 each </h3>

        {Object.keys(pizzaToppings).map((name, i) => (
          <label key={i}>
            {" "}
            <input
              name="base"
              type="radio"
              value="name"
              checked={this.state.value === "name"}
              onChange={this.handleChange}
            />
            {name} <br />
          </label>
        ))}
      </div>
    );
  }
}

export default PizzaTopping;
