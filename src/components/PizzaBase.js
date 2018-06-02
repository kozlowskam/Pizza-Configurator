import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pizzaBases } from "../lib";

export class PizzaBase extends PureComponent {
  state = { value: "" };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> Pick your Pizza Base </h2>

        {Object.keys(pizzaBases).map((name, i) => (
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

export default PizzaBase;
