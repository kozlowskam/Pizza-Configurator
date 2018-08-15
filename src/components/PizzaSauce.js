import React from "react";
import { connect } from "react-redux";
import { pizzaSauces } from "../lib";
import { pickSauce } from "../actions/actions";
import store from "../store";
import "../App.css";

export class PizzaSauce extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleChange = event => {
    const target = event.target;
    const value = event.target.value;
    this.setState({ value });
    store.dispatch(pickSauce({ value }));
  };

  render() {
    return (
      <div className="container">
        <h2> Pick your Pizza Sauce </h2>
        <form>
          {pizzaSauces.map(sauce => (
            <label key={sauce.name}>
              <input
                name="sauce"
                type="radio"
                value={sauce.price}
                checked={this.state.value == sauce.price}
                onChange={this.handleChange}
              />
              {sauce.name} &euro;
              {sauce.price} <br />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { pickSauce }
)(PizzaSauce);
