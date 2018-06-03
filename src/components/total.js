import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaBases, pizzaSauces, pizzaToppings } from "../lib";

export class Total extends PureComponent {
  getTotalPrice() {
    var basePrice = this.props.base;
    var saucePrice = this.props.sauce;
    /* var toppingPrice = this.props.topping
      .map(topping => pizzaToppings[topping])
      .reduce((a, b) => a + b, 0);
    console.log(this.props.topping.; */
    return basePrice + saucePrice;
  }

  render() {
    return (
      <div>
        <h3>${this.getTotalPrice()}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.pbase,
    sauce: state.psauce,
    topping: state.ptopping
  };
};

export default connect(mapStateToProps)(Total);
