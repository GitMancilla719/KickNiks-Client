import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ProductSlice = createSlice({
  name: 'products',
  initialState: { allProducts: null, item: null, cart: null },
  reducers: {
    GET_PRODUCTS: (state, action) => {
      return { ...state, allProducts: action.payload }
    },
    ADD_PRODUCTS: (state, action) => {
      return { ...state, allProducts: action.payload }
    },
    OPEN_PRODUCT: (state, action) => {
      return { ...state, item: action.payload }
    },
    ADD_CART: (state, action) => {
      return { ...state, cart: action.payload }
    },
    GET_CART: (state, action) => {
      return { ...state, cart: action.payload }
    },
  },
})

export default ProductSlice.reducer

const { GET_PRODUCTS, ADD_PRODUCTS, OPEN_PRODUCT, ADD_CART, GET_CART } = ProductSlice.actions

export const getProducts = () => async (dispatch) => {
  try {
    const products = await axios.get('http://localhost:5000/products')
    dispatch(GET_PRODUCTS(products.data))
  } catch (error) {
    dispatch(GET_PRODUCTS(error.response))
    console.log('error', error.response)
  }
}
export const addProducts = (product) => async (dispatch) => {
  try {
    const token = localStorage.getItem('authToken')
    const products = await axios.post('http://localhost:5000/products/addKicks', product, {
      headers: { authToken: token },
    })
    dispatch(ADD_PRODUCTS(products.data))
  } catch (error) {
    dispatch(ADD_PRODUCTS(error.response.data))
  }
}

export const openProduct = (prod) => async (dispatch) => {
  try {
    const products = await axios.get(`http://localhost:5000/products/item/${prod}`)
    dispatch(OPEN_PRODUCT(products.data))
  } catch (error) {
    dispatch(OPEN_PRODUCT(error.response.data))
  }
}

export const addToCart = (id, cartItems) => async (dispatch) => {
  try {
    const products = await axios.patch(`http://localhost:5000/user/add-to-cart/${id}`, cartItems)
    dispatch(ADD_CART(products.data))
  } catch (error) {
    dispatch(ADD_CART(error.response.data))
    // console.log('slice error', error.response)
  }
}

export const getCart = (userID) => async (dispatch) => {
  try {
    const products = await axios.get(`http://localhost:5000/user/cart/${userID}`)
    dispatch(GET_CART(products.data))
  } catch (error) {
    dispatch(GET_CART(error.response.data))
  }
}
