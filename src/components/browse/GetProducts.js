import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import productSlice, { getProducts } from '../../redux/slices/product.slice'
import { Box, Typography, Modal } from '@material-ui/core'
import GetProductStyle from './GetProducts.style'
import { useHistory, Link } from 'react-router-dom'
import { openProduct } from '../../redux/slices/product.slice'
import ItemView from './ItemView'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const GetProducts = () => {
  const cls = GetProductStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const Products = useSelector((state) => state.ProductSlice)
  const [modalItem, setModalItem] = useState(false)
  const [item_ID, setitem_ID] = useState()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const itemClick = (prod_id) => {
    setModalItem(true)
    setitem_ID(prod_id)
  }
  // console.log('getprod', Products.allProducts)
  return (
    <Box className={cls.container}>
      <Typography align='center' className={cls.openingText}>
        OUR COLLECTION
      </Typography>
      <Box className={cls.items}>
        {Products.allProducts &&
          Products.allProducts.map((prod) => (
            <Box onClick={() => itemClick(prod._id)} className={cls.itemCard} key={prod._id}>
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
          ))}
      </Box>

      <Modal open={modalItem} onClose={() => setModalItem(false)} style={{ overflow: 'scroll' }}>
        <ItemView item_ID={item_ID} />
      </Modal>
    </Box>
  )
}

export default GetProducts
