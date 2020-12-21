import { useDispatch, useSelector } from "react-redux"
import {useState, useEffect} from 'react'
import productSlice, {getProducts} from '../../redux/slices/product.slice'
import { Box, Typography, Card } from "@material-ui/core"
import GetProductStyle from './GetProducts.style'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const GetProducts = () => {
    const cls = GetProductStyle()
    const dispatch = useDispatch()
    const Products = useSelector(state => state.ProductSlice)
    console.log('products', Products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <Box>
            {
                Products && 
                Products.map(prod => 
                    <Box component={Card} variant='outlined' className={cls.itemCard} key={prod._id}>
                        <Carousel
                            interval={2000}
                            indicators={true}
                            controls={false}
                            className={cls.carousel}
                        >
                        {
                           prod.KN_images.map( (itemImage, index) => 
                           <Carousel.Item  className={cls.carouselItem}>
                                <img key={index} src={itemImage} alt='Item' width='100'/> 
                           </Carousel.Item>)
                        }
                        </Carousel>
                        <Typography>{prod.KN_item}</Typography>
                    </Box>
                )
            }
        </Box>
    )
}

export default GetProducts
