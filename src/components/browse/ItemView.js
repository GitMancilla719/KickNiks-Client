import React from 'react'
import ItemViewStyle from './ItemView.style'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { openProduct } from '../../redux/slices/product.slice'
import { Box, Typography } from '@material-ui/core'

const ItemView = (props) => {
  const cls = ItemViewStyle()
  const id = props ? props.location.state.id : null
  const dispatch = useDispatch()
  const history = useHistory()
  const Product = useSelector((state) => state.ProductSlice)

  useEffect(() => {
    if (id) {
      dispatch(openProduct(id))
    }
    if (!id) return history.push('/')
  }, [dispatch])

  console.log(Product)
  return (
    <div className={cls.container}>
      {Product && (
        <Box>
          <Typography>{Product.KN_item}</Typography>
          <Typography>{Product.KN_price}</Typography>
          <Typography>{Product.KN_brand}</Typography>
          <Typography>{Product.KN_shoeType}</Typography>
          <Typography>{Product.KN_description}</Typography>
        </Box>
      )}
    </div>
  )
}

export default ItemView
