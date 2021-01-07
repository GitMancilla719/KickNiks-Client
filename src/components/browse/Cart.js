import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../redux/slices/product.slice'
import { validateToken } from '../../redux/slices/validateToken.slice'

import { Box, Typography, Modal } from '@material-ui/core'

const Cart = () => {
  const Product = useSelector((state) => state.ProductSlice)
  const validateUser = useSelector((state) => state.ValidateTokenSlice)
  const dispatch = useDispatch()

  const [state, setstate] = useState()
  useEffect(() => {
    // experimental
    // const token = localStorage.getItem('authToken')
    // if (token) return dispatch(validateToken(token))
    // dispatch(getCart(validateUser.user_id))
  }, [])

  console.log('cart ito', Product.cart)

  return (
    <div>
      {Product.cart &&
        Product.cart.cart.map((cartItem) => (
          <>
            <Typography>{cartItem.cartID}</Typography>
          </>
        ))}
    </div>
  )
}

export default Cart
