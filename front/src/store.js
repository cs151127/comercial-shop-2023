

import { applyMiddleware,combineReducers, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import { userLoginReducers,userRegisterReducers } from "./reducers/userReducers";
const reducer = combineReducers({
productList : productListReducers,
productDetails : productDetailsReducers,
cart:cartReducers,
userLogin: userLoginReducers,
userRegister:userRegisterReducers,
})
const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]
const userInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    cart: {
      cartItems: cartItemsFromStorage
    },
    userLogin : { userInfo:userInfoFromStorage}
  }
  
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store

