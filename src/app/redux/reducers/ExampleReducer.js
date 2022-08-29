import { POST_SUCCESS, POST_FAIL } from "../actions/ExampleAction";
const initialState = {
  data: [],
};

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case POST_FAIL:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default ExampleReducer;
