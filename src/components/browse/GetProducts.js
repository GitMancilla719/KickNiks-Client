import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import productSlice, { getProducts } from '../../redux/slices/product.slice'
import { Box, Typography, Card, Container } from '@material-ui/core'
import GetProductStyle from './GetProducts.style'
import { useHistory, Link } from 'react-router-dom'
import { openProduct } from '../../redux/slices/product.slice'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const GetProducts = () => {
  const cls = GetProductStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const Products = useSelector((state) => state.ProductSlice)
  // console.log('products', Products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const clickTest = (id) => {
    //history.push('/admin/add-product')
    //dispatch(openProduct(id))
  }

  return (
    <Box className={cls.container}>
      <Typography align='center' className={cls.openingText}>
        OUR COLLECTION
      </Typography>
      <Box className={cls.items}>
        {Products &&
          Products.map((prod) => (
            <Link to={{ pathname: `/item/${prod._id}`, state: { id: prod._id } }} target='_blank'>
              <Box onClick={() => clickTest(prod._id)} className={cls.itemCard} key={prod._id}>
                <Carousel interval={2500} indicators={false} controls={false} className={cls.carousel}>
                  {prod.KN_images.map((itemImage, index) => (
                    <Carousel.Item key={index} className={cls.carouselItem}>
                      <img className={cls.carouselImage} src={itemImage} alt='Item' />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Box className={cls.itemDetails}>
                  <Typography className={cls.itemDets}>{prod.KN_item}</Typography>
                  <Typography className={cls.itemDets}>₱{parseFloat(prod.KN_price).toLocaleString()}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  )
}

export default GetProducts
