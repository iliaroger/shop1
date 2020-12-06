import Axios from 'axios';
import {
  CART_FAIL,
  CART_REQUEST,
  CART_SUCCESS,
} from '../constants/cartConstants';

export const cartAction = () => (dispatch: any) => {
  dispatch({
    type: CART_REQUEST,
  });

  try {
    Axios.get('/api/cart').then((data) => {
      dispatch({
        type: CART_SUCCESS,
        payload: data.data,
      });
    });
  } catch (err) {
    dispatch({
      type: CART_FAIL,
      payload: err.message,
    });
  }
};
