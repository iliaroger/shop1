import Axios from 'axios';
import {
  CART_FAIL,
  CART_GET_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_REQUEST,
  CART_SUCCESS,
} from '../constants/cartConstants';

export const cartAction = (
  productId: number,
  quantity: number,
  productPrice: number
) => async (dispatch: any) => {
  try {
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
    })
      .then(() => {
        dispatch({
          type: CART_SUCCESS,
        });
      })
      .catch((err) => {
        console.log('your received an error: ' + err.message);
      });
  } catch (err) {
    dispatch({
      type: CART_FAIL,
      payload: err.message,
    });
  }
};

export const getCart = () => async (dispatch: any) => {
  try {
    dispatch({
      type: CART_GET_REQUEST,
    });
    await Axios.get('/api/cart').then((data) => {
      dispatch({
        type: CART_GET_SUCCESS,
        payload: data,
      });
    });
  } catch (err) {
    dispatch({
      type: CART_GET_FAIL,
      payload: err.message,
    });
  }
};
