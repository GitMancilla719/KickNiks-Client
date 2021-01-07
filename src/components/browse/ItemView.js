import React from 'react'
import ItemViewStyle from './ItemView.style'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openProduct, addToCart } from '../../redux/slices/product.slice'
import { Box, Typography, Card, Button } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { validateToken } from '../../redux/slices/validateToken.slice'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import crypto from 'crypto'

const ItemView = ({ item_ID }) => {
  const cls = ItemViewStyle()
  const dispatch = useDispatch()
  const Product = useSelector((state) => state.ProductSlice)
  const validateUser = useSelector((state) => state.ValidateTokenSlice)

  const [ImageIndex, setImageIndex] = useState()
  const [cart, setCart] = useState()
  const [status, setStatus] = useState(null)

  const sizes = [40.5, 41, 42, 43, 44.5, 45, 46, 47.5, 48, 49, 50]

  useEffect(() => {
    dispatch(openProduct(item_ID))
    // const token = localStorage.getItem('authToken')
    // if (token) return dispatch(validateToken(token)) see if no bugs
  }, [dispatch, setImageIndex, Product.cart])

  const addInfoToCart = (size) => {
    const cryptonite = crypto.randomBytes(5).toString('hex')
    setCart([
      {
        cartID: cryptonite,
        itemID: Product.item._id,
        itemName: Product.item.KN_item,
        itemPrice: Product.item.KN_price,
        itemSize: size,
      },
    ])
  }

  const toCart = () => {
    if (validateUser && cart) {
      dispatch(addToCart(validateUser.user_id, cart))
      document.getElementById('addtocartbutton').style.backgroundColor = 'green'
      document.getElementById('statusText').style.color = 'green'
      setStatus('Item added to cart.')
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } else {
      document.getElementById('addtocartbutton').style.backgroundColor = 'red'
      document.getElementById('statusText').style.color = 'red'
      if (!validateUser) return setStatus('Please login or register an account')
      if (!cart) return setStatus('Please select your shoe size.')
    }
  }

  // console.log('cart', Product.cart)
  return (
    <>
      {Product.item && (
        <Box component={Card} elevation={5} className={cls.prod}>
          <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
              {Product.item &&
                Product.item.KN_images.map((itemImage, index) => (
                  <Box key={index} className={cls.carouselItem}>
                    <img
                      className={cls.carouselImageSelect}
                      src={itemImage}
                      alt='Item'
                      onClick={() => setImageIndex(index)}
                    />
                  </Box>
                ))}
            </Box>
            <Carousel
              activeIndex={ImageIndex}
              interval={3000}
              indicators={false}
              controls={false}
              className={cls.carousel}
            >
              {Product.item &&
                Product.item.KN_images.map((itemImage, index) => (
                  <Carousel.Item key={index} className={cls.carouselItem}>
                    <img className={cls.carouselImage} src={itemImage} alt='Item' />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Box>

          <Box className={cls.prodDescription}>
            <Typography className={cls.prodItem}>{Product.item.KN_item}</Typography>
            <Typography className={cls.prodItem}>₱{parseFloat(Product.item.KN_price).toLocaleString()}</Typography>
            <Typography className={cls.prodSub}>Brand : {Product.item.KN_brand}</Typography>
            <Typography className={cls.prodSub}>Shoe type : {Product.item.KN_shoeType}</Typography>
            <Typography className={cls.prodDesc}>{Product.item.KN_description}</Typography>
            Select Size : EU
            <Box display='flex' flexDirection='row' flexWrap='wrap'>
              {sizes.map((size) => (
                <Button key={size} variant='outlined' onClick={() => addInfoToCart(size)}>
                  {size}
                </Button>
              ))}
            </Box>
            <Button id='addtocartbutton' className={cls.addToCartBtn} onClick={() => toCart()}>
              <ShoppingCart />
              Add to Cart
            </Button>
            <Typography id='statusText'>{status}</Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default ItemView
