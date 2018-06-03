import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaSauces } from "../lib";
import { pickSauce } from "../actions/actions";
import store from "../store";

export class PizzaSauce extends PureComponent {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
    store.dispatch(pickSauce({ value: event.target.value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Sauce </h2>

        {pizzaSauces.map(sauce => (
          <label key={sauce.name}>
            <input
              name="sauce"
              type="checkbox"
              value={sauce.price}
              checked={this.state.value === sauce}
              onChange={this.handleChange}
            />
            {sauce.name} ${sauce.price} <br />
          </label>
        ))}
      </div>
    );
  }
}

export default connect(null, { pickSauce })(PizzaSauce);
