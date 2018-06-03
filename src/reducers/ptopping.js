import { PICK_TOPPINGS } from "../actions/actions";

export default (state = [], action) => {
  switch (action.type) {
    case "PICK_TOPPINGS":
      if (state.length < 3) return [...state, action.payload];
      else return state;

    default:
      return state;
  }
};
