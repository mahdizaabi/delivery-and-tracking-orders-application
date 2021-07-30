import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {getProductsReducer} from './Reducers/productReducer'
import {CartReducer} from './Reducers/cartReducer';

const finalReducer = combineReducers({
    getProductsReducer: getProductsReducer,
    CartReducer
})

/* Local storage */
const cart_Items_Local_Storage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

/*               */
const insitialState= {CartReducer:{cartItems:cart_Items_Local_Storage}};

const composeEnhancer = composeWithDevTools({})
const store = createStore(finalReducer, insitialState,composeEnhancer(applyMiddleware(thunk)))

export default store;