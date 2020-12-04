import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';
import axios from 'axios';

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
