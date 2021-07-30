import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {getProductsReducer} from './Reducers/productReducer'

const finalReducer = combineReducers({
    getProductsReducer: getProductsReducer
})
const insitialState= {};
const composeEnhancer = composeWithDevTools({})
const store = createStore(finalReducer, insitialState,composeEnhancer(applyMiddleware(thunk)))

export default store;