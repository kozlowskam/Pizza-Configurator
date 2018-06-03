import { PICK_TOPPINGS, DELETE_TOPPING } from "../actions/actions";

export default (state = [], action) => {
  switch (action.type) {
    case "PICK_TOPPINGS":
      //if (state.length < 3)
      return [...state, action.payload.value];
    //else return state;
    case "DELETE_TOPPING":
      return state;

    default:
      return state;
  }
};
