import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import UserSlice from './slices/users.slice'
import ValidateTokenSlice from './slices/validateToken.slice'
import RegisterUserSlice from './slices/registerUser.slice'
import ProductSlice from './slices/product.slice'

const reducer = combineReducers({
    UserSlice,
    ValidateTokenSlice,
    RegisterUserSlice,
    ProductSlice
})

const Store = configureStore({
    reducer,
})

export default Store