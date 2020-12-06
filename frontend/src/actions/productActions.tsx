import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from '../constants/productConstants';
import axios from 'axios';
import Axios from 'axios';

export const productsAction = () => async (dispatch: any) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    await axios.get('/api/products').then((data) => {
      setTimeout(() => {
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: data.data,
        });
      }, 1000);
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const productDetailAction = (productId: number) => async (
  dispatch: any
) => {
  dispatch({
    type: PRODUCT_REQUEST,
  });
  try {
    setTimeout(() => {
      Axios.get(`/api/product/${productId}`).then((data) => {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: data.data[0],
        });
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: err.message,
    });
  }
};
