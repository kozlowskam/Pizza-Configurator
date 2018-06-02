export const PICK_BASE = "PICK_BASE";
export const PICK_SAUCE = "PICK_SAUCE";
export const PICK_TOPPINGS = "PICK_TOPPINGS";

export const pickBase = base => {
  return {
    type: "PICK_BASE",
    payload: base
  };
};

export const pickSauce = sauce => {
  return {
    type: "MAKE_GUESS",
    payload: sauce
  };
};

export const pickToppings = sauce => {
  return {
    type: "PICK_TOPPINGS",
    payload: toppings
  };
};
