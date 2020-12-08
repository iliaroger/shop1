import Axios from 'axios';
import {
  CART_FAIL,
  CART_REQUEST,
  CART_SUCCESS,
} from '../constants/cartConstants';

export const cartAction = (
  productId: number,
  quantity: number,
  productPrice: number
) => async (dispatch: any) => {
  dispatch({
    type: CART_REQUEST,
  });

  await Axios({
    method: 'POST',
    url: `/api/add/cart/${productId}`,
    data: {
      productId: productId,
      productQuantity: quantity,
      productPrice: productPrice,
    },
  }).then(() => {
    dispatch({
      type: CART_SUCCESS,
    });
  });

  try {
  } catch (err) {
    dispatch({
      type: CART_FAIL,
      payload: err.message,
    });
  }
};

export const getCart = () => (dispatch: any) => {
  dispatch({
    type: CART_REQUEST,
  });

  try {
    Axios.get('/api/cart').then((data) => {
      dispatch({
        type: CART_SUCCESS,
        payload: data,
      });
    });
  } catch (err) {
    dispatch({
      type: CART_FAIL,
      payload: err.message,
    });
  }
};
