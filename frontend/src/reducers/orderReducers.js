import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL
} from "../constants/orderConstants";

function orderCreateReducer(state = {}, action) {
  switch (action.payload) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        order: action.payload
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export { orderCreateReducer };
