import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pickBase } from "../actions/actions";
import { pizzaBases } from "../lib";
import store from "../store";

export class PizzaBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    store.dispatch(pickBase({ value: event.target.value }));
  };

  render() {
    return (
      <div>
        <h2> Pick your Pizza Base </h2>

        {pizzaBases.map(base => (
          <label key={base.name}>
            <input
              name="base"
              type="checkbox"
              value={base.price}
              //checked={this.state.value === base}
              onChange={this.handleChange}
            />
            {base.name} ${base.price} <br />
          </label>
        ))}
      </div>
    );
  }
}

export default connect(null, { pickBase })(PizzaBase);
