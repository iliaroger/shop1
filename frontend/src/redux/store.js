import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from '../reducers/productsReducer';

const initState = {};
const reducer = combineReducers({
  productList: productReducer,
});
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
