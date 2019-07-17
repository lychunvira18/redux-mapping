import { FETCH_POSTS } from "../Actions/types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
