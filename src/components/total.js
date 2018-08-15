import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pizzaBases, pizzaSauces, pizzaToppings } from "../lib";
import { Link } from "react-router-dom";
import "../App.css";

export class Total extends PureComponent {
  getFoodPrice() {
    var basePrice = this.props.base;
    var saucePrice = this.props.sauce;
    var toppingPrice = this.props.topping
      .map(
        topping => (0.5 * this.props.topping.length) / this.props.topping.length
      )
      .reduce((a, b) => a + b, 0);
    console.log(this.props.topping);

    return (
      Number(basePrice) +
      Number(saucePrice) +
      Number(toppingPrice)
    ).toFixed(2);
  }

  addDrone() {
    let foodPrice = Number(this.getFoodPrice());
    return (foodPrice + 0.1 * foodPrice).toFixed(2);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <h3>
                Your Pizza price: <br /> Order now!{" "}
              </h3>
            </td>
            <td>
              <h3>&euro; {this.getFoodPrice()}</h3>{" "}
            </td>
            <td>
              {" "}
              <Link className="Link_button" to={`/order`}>
                {" "}
                ORDER{" "}
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h3>
                Order with Turbo Dron Delivery <br /> Only 10% of total price!{" "}
              </h3>
            </td>
            <td>
              <h3>&euro; {this.addDrone()}</h3>
            </td>
            <td>
              <Link className="Link_button" to={`/order`}>
                {" "}
                ORDER{" "}
              </Link>
            </td>
          </tr>
        </table>
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
