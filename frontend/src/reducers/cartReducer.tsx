import {
  CART_FAIL,
  CART_GET_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_REQUEST,
  CART_SUCCESS,
} from '../constants/cartConstants';

export const cartReducer = (state = { loading: false }, action: any) => {
  switch (action.type) {
    case CART_REQUEST:
      return { loading: true };

    case CART_SUCCESS:
      return {
        loading: false,
      };

    case CART_FAIL:
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export const getCartReducer = (
  state = { loading: false, data: { auth: false, message: '', data: [] } },
  action: any
) => {
  switch (action.type) {
    case CART_GET_REQUEST:
      return { loading: true };

    case CART_GET_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case CART_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
