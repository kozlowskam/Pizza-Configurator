import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pickBase } from "../actions/actions";
import { pizzaBases } from "../lib";
import store from "../store";

export class PizzaBase extends PureComponent {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(target.value);
    this.setState({ value: event.target.value });
    store.dispatch(pickBase({ value: event.target.value }));
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
                type="checkbox"
                value={base.price}
                checked={this.state.base}
                onChange={this.handleChange}
              />
              {base.name} &euro;{base.price} <br />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default connect(null, { pickBase })(PizzaBase);
