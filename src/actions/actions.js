export const PICK_BASE = "PICK_BASE";
export const PICK_SAUCE = "PICK_SAUCE";
export const PICK_TOPPINGS = "PICK_TOPPINGS";
export const DELETE_TOPPING = "RESET_TOPPINGS";
export const CHANGE_TOPPING = "CHANGE_TOPPING";

export const pickBase = base => {
  return {
    type: "PICK_BASE",
    payload: base
  };
};

export const pickSauce = sauce => {
  return {
    type: "PICK_SAUCE",
    payload: sauce
  };
};

export const pickToppings = toppings => {
  return {
    type: "PICK_TOPPINGS",
    payload: toppings
  };
};

export const deleteTopping = toppings => {
  return {
    type: "DELETE_TOPPING",
    payload: toppings
  };
};

export const changeTopping = toppings => {
  return {
    type: "CHANGE_TOPPING",
    payload: toppings
  };
};
