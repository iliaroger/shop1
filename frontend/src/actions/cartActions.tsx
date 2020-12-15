import Axios from 'axios';
import {
  CART_FAIL,
  CART_GET_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_REQUEST,
  CART_SUCCESS,
} from '../constants/cartConstants';

const getCurrentTime = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minuntes = currentDate.getMinutes();

  if (hours < 10) {
    return `0${hours}:${minuntes}`;
  } else if (minuntes < 10) {
    return `${hours}:0${minuntes}`;
  } else if (hours < 10 && minuntes < 10) {
    return `0${hours}:0${minuntes}`;
  } else return `${hours}:${minuntes}`;
};

export const postCartItem = (productId: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: CART_REQUEST,
    });

    await Axios({
      method: 'POST',
      url: `/api/cart/${productId}`,
      data: {
        productId: productId,
        productQuantity: 1,
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
  localStorage.setItem('lastOnline', getCurrentTime());
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

export const removeItemFromCart = (cartId: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: CART_REQUEST,
    });
    await Axios({
      method: 'POST',
      url: `/api/cart/remove/${cartId}`,
    }).then(() => {
      dispatch({
        type: CART_SUCCESS,
      });
    });
  } catch (err) {
    dispatch({
      type: CART_FAIL,
      data: err.message,
    });
  }
};
