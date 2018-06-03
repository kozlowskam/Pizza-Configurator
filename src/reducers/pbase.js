import { PICK_BASE } from "../actions/actions";

export default (state = "", action) => {
  switch (action.type) {
    case PICK_BASE:
      return action.payload.value;

    default:
      return state;
  }
};
