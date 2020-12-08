import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  productReducer,
  productDetailReducer,
} from '../reducers/productsReducer';

import { cartReducer, getCartReducer } from '../reducers/cartReducer';

const initState = {};
const reducer = combineReducers({
  productList: productReducer,
  productDetail: productDetailReducer,
  cartDetails: cartReducer,
  getCartList: getCartReducer,
});
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
