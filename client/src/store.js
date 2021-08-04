import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getProductsReducer } from './Reducers/productReducer'
import { CartReducer } from './Reducers/cartReducer';
import { userRegistrationReducer, userLoginReducer } from './Reducers/userReducer'
import {orderReducer,getAllOrdersReducer} from './Reducers/orderReducer';


const finalReducer = combineReducers({
    getProductsReducer: getProductsReducer,
    CartReducer, userRegistrationReducer,
    userLoginReducer,orderReducer,getAllOrdersReducer
})

/* Local storage */
const cart_Items_Local_Storage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const user_isLogedIn_Local_Storage = localStorage.getItem('userIsLoggedIn') ? true : false
const user_Local_Storage = localStorage.getItem('userIsLoggedIn')
/*               */
const insitialState = {
    CartReducer: { cartItems: cart_Items_Local_Storage },
    userLoginReducer: { success: user_isLogedIn_Local_Storage, user: JSON.parse(user_Local_Storage) }
};
const composeEnhancer = composeWithDevTools({})
const store = createStore(finalReducer, insitialState, composeEnhancer(applyMiddleware(thunk)))

export default store;