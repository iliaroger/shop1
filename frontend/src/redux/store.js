import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  productReducer,
  productDetailReducer,
} from '../reducers/productsReducer';

import { cartReducer, getCartReducer } from '../reducers/cartReducer';
import {
  userRegisterReducer,
  userLoginReducer,
} from '../reducers/profileReducer';

// insert localstorage data to init state
const initState = {};
const reducer = combineReducers({
  productList: productReducer,
  productDetail: productDetailReducer,
  cartDetails: cartReducer,
  getCartList: getCartReducer,
  register: userRegisterReducer,
  login: userLoginReducer,
});
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
