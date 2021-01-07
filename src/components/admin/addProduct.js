import { useState, useEffect } from 'react'
import { validateToken } from '../../redux/slices/validateToken.slice'
import FileBase64 from 'react-file-base64'
import { Box, TextField, Button, Typography, Card, Select, InputLabel } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../../redux/slices/product.slice'
import AddProductStyle from './addProduct.style'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddProduct = () => {
  const dispatch = useDispatch()
  const cls = AddProductStyle()
  const history = useHistory()
  const validateUser = useSelector((state) => state.ValidateTokenSlice)
  const productStatus = useSelector((state) => state.ProductSlice)

  const [productInfo, setProductInfo] = useState({
    KN_item: undefined,
    KN_images: [],
    KN_brand: undefined,
    KN_description: undefined,
    KN_shoeType: undefined,
    KN_price: undefined,
    KN_stock: undefined,
  })
  const [imgArray, setImgArray] = useState([])

  //useEffect(() => {}, [productInfo, imgArray, productStatus, dispatch])

  const pushImage = (image) => setImgArray([...imgArray, image])
  const submitNewProduct = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('authToken')
    if (token) return dispatch(addProducts(productInfo, token))
  }
  const showError = productStatus ? productStatus.msg : null
  const showSuccess = productStatus ? (productStatus.KN_item ? 'Item added successfully.' : null) : null

  //permissions
  const dispatchValidation = () => {
    const token = localStorage.getItem('authToken')
    if (!token) return history.push('/')
    dispatch(validateToken(token))
  }
  const validUser = () => {
    if (validateUser) {
      if (!validateUser.isAdmin || !validateUser.validToken) return history.push('/')
    }
  }
  dispatchValidation()
  validUser()
  return (
    <Box className={cls.container}>
      <Box component={Card} className={cls.addProdBox}>
        <Box className={cls.warnings}>
          <Typography align='center' variant='h6' className={cls.section}>
            ADD - a - PAIR
          </Typography>
          <Typography align='center' className={cls.errors}>
            {showError}
          </Typography>
          <Typography align='center' className={cls.success}>
            {showSuccess}
          </Typography>
        </Box>
        <form onSubmit={submitNewProduct} className={cls.form}>
          <TextField
            size='small'
            type='text'
            label='Product Name'
            onChange={(e) => setProductInfo({ ...productInfo, KN_item: e.target.value })}
          />
          <TextField
            size='small'
            type='text'
            label='Brand'
            onChange={(e) => setProductInfo({ ...productInfo, KN_brand: e.target.value })}
          />
          <InputLabel id='select-label'>Shoe Type</InputLabel>
          <Select
            native
            labelId='select-label'
            defaultValue={'shoe type'}
            label='Shoe Type'
            onChange={(e) => setProductInfo({ ...productInfo, KN_shoeType: e.target.value })}
          >
            <option value='Athletic'>Athletic</option>
            <option value='SkateBoarding'>SkateBoarding</option>
            <option value='Trainers'>Trainers</option>
          </Select>
          <TextField
            size='small'
            type='number'
            label='Price'
            onChange={(e) => setProductInfo({ ...productInfo, KN_price: e.target.value })}
          />
          <TextField
            size='small'
            type='number'
            label='Stock'
            onChange={(e) => setProductInfo({ ...productInfo, KN_stock: e.target.value })}
          />
          <TextField
            size='small'
            type='text'
            multiline
            rowsMax={5}
            label='Description'
            onChange={(e) => setProductInfo({ ...productInfo, KN_description: e.target.value })}
          />
          <Box className={cls.uploadBox}>
            <Typography variant='caption'>Add Product image.(multiple images supported)</Typography>
            <FileBase64 type='file' multiple={false} onDone={({ base64 }) => pushImage(base64)} />
          </Box>
          <Button
            className={cls.btn}
            type='submit'
            onClick={() => setProductInfo({ ...productInfo, KN_images: imgArray })}
          >
            Add Product
          </Button>
        </form>
      </Box>

      <Box component={Card} className={cls.viewProdBox}>
        <Typography align='center' variant='h6' className={cls.section}>
          New KICKS preview
        </Typography>

        <Box className={cls.newProduct}>
          {productInfo ? (
            <Box>
              <Box component={Card} variant='outlined' className={cls.newProductCarousel}>
                <Carousel interval={2000} indicators={true} controls={false} className={cls.carousel}>
                  {imgArray.map((kicks) => (
                    <Carousel.Item className={cls.carouselItem}>
                      <img key={kicks} className={`${cls.carouselImage}`} src={kicks} alt='kicks' />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Box>
              <Box className={cls.item} display='flex' flexDirection='column'>
                <Typography className={cls.itemName}>
                  {productInfo.KN_item ? productInfo.KN_item.toUpperCase() : 'Item Name Here'}
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                  <Typography className={cls.itemPrice}>
                    ₱{productInfo.KN_price ? parseInt(productInfo.KN_price).toLocaleString(1) : 0}
                  </Typography>
                  <Typography variant='caption'>
                    stock : {productInfo.KN_stock ? parseInt(productInfo.KN_stock) : 0}
                  </Typography>
                </Box>
                <Typography variant='caption'>Brand : {productInfo.KN_brand}</Typography>
                <Typography variant='caption'>Category : {productInfo.KN_shoeType}</Typography>
                <Typography className={cls.itemDesc}>Item Description : {productInfo.KN_description}</Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default AddProduct
