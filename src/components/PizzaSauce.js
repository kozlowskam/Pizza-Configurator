import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaSauces } from "../lib";
import { pickSauce } from "../actions/actions";
import store from "../store";

export class PizzaSauce extends PureComponent {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    store.dispatch(pickSauce({ value: event.target.value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Sauce </h2>
        <form>
          {pizzaSauces.map(sauce => (
            <label key={sauce.name}>
              <input
                name="sauce"
                type="checkbox"
                value={sauce.price}
                checked={this.state.sauce}
                onChange={this.handleChange}
              />
              {sauce.name} &euro;{sauce.price} <br />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(null, { pickSauce })(PizzaSauce);
