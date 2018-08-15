import { PICK_TOPPINGS, DELETE_TOPPING } from "../actions/actions";

export default (state = [], action) => {
  switch (action.type) {
    case "PICK_TOPPINGS":
      return [...state, action.payload];
      console.log(action.payload);

    case "DELETE_TOPPING":
      return state.filter(ptopping => ptopping !== action.payload);
      console.log(action.payload + "in reducer");

    default:
      return state;
  }
};
