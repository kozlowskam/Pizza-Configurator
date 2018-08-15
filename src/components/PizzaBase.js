import React from "react";
import { connect } from "react-redux";
import { pickBase } from "../actions/actions";
import { pizzaBases } from "../lib";
import store from "../store";

export class PizzaBase extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleChange = event => {
    const target = event.target;
    // const value = target.checked ? target.value : 0;
    const value = event.target.value;
    this.setState({ value });
    store.dispatch(pickBase({ value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Base </h2>
        <form>
          {pizzaBases.map(base => (
            <label key={base.name}>
              <input
                name="base"
                type="radio"
                value={base.price}
                checked={this.state.value == base.price}
                onChange={this.handleChange}
              />
              {base.name} &euro;
              {base.price} <br />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { pickBase }
)(PizzaBase);
