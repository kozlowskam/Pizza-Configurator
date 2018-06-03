import { PICK_BASE } from "../actions/actions";

export default (state = null, action) => {
  switch (action.type) {
    case PICK_BASE:
      return action.payload.value;
      console.log(action.payload.value);

    default:
      return state;
  }
};
