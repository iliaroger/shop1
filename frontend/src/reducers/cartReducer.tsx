import {
  CART_FAIL,
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
  state = { loading: false, cartData: [] },
  action: any
) => {
  switch (action.type) {
    case CART_REQUEST:
      return { loading: true };

    case CART_SUCCESS:
      return {
        loading: false,
        cartData: action.payload,
      };

    case CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
