import { PICK_SAUCE } from "../actions/actions";

export default (state = 0, action) => {
  switch (action.type) {
    case PICK_SAUCE:
      return action.payload.value;

    default:
      return state;
  }
};
