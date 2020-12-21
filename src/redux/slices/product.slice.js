import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ProductSlice = createSlice({
    name : 'users',
    initialState : null,
    reducers : {
        GET_PRODUCTS : (state, action) => {
            return state = action.payload
        },
        ADD_PRODUCTS : (state, action) => {
            return state = action.payload
        },
    }
})

export default ProductSlice.reducer

const { GET_PRODUCTS, ADD_PRODUCTS } = ProductSlice.actions

export const getProducts = () => async(dispatch) => {
    try {
        const products = await axios.get('http://localhost:5000/products')
        dispatch(GET_PRODUCTS(products.data))
    } catch (error) {
        dispatch(GET_PRODUCTS(error.response.data))
    }
}
export const addProducts = (product) => async(dispatch) => {
    try {
        const token = localStorage.getItem('authToken')
        const products = await axios.post('http://localhost:5000/products/addKicks', product, {headers : {'authToken' : token}} )
        dispatch(ADD_PRODUCTS(products.data))
    } catch (error) {
        dispatch(ADD_PRODUCTS(error.response.data))
    }
} 

