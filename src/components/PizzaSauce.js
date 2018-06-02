import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pizzaSauces } from "../lib";

export class PizzaSauce extends PureComponent {
  state = { value: "" };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> Pick your Pizza Sauce </h2>

        {Object.keys(pizzaSauces).map((name, i) => (
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

export default PizzaSauce;
