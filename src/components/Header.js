import { AppBar, Box, Button, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import HeaderStyle from './Header.style'
import knWhite from '../assets/knWhite.png'
import kicknuksWhite from '../assets/kickniksWhite.png'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../redux/slices/users.slice'
import { getCart } from '../redux/slices/product.slice'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Header = ({ setModalLogin, setModalRegister }) => {
  const cls = HeaderStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const validateUser = useSelector((state) => state.ValidateTokenSlice)
  const Product = useSelector((state) => state.ProductSlice)

  const status = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      document.getElementById('login').style.display = 'block'
      document.getElementById('register').style.display = 'block'
      document.getElementById('logout').style.display = 'none'
      document.getElementById('cart').style.display = 'none'
    } else {
      document.getElementById('login').style.display = 'none'
      document.getElementById('register').style.display = 'none'
      document.getElementById('logout').style.display = 'block'
      document.getElementById('cart').style.display = 'block'
    }
  }

  const badgeNotif = Product.cart ? (Product.cart.cart ? Product.cart.cart.length : 0) : 0

  useEffect(() => {
    status()
    // window.location.reload()
  }, [Product.cart, badgeNotif])

  const logout = () => {
    dispatch(userLogout())
    history.push('/')
    window.location.reload()
  }

  const cart = () => {
    history.push('/user/shopping-cart')
  }

  //FIX CART ITEMS NOTIF DISSAPEARING WHEN ADDING TO CART
  return (
    <AppBar position='static' className={cls.appBar}>
      <Box className={cls.nav}>
        <img src={knWhite} alt='kn' width='50' />
        <img src={kicknuksWhite} alt='kn' width='100' />
      </Box>

      <Box className={cls.nav}>
        <Button id='login' className={cls.navSelection} onClick={() => setModalLogin(true)}>
          Login
        </Button>
        <Button id='register' className={cls.navSelection} onClick={() => setModalRegister(true)}>
          Sign up
        </Button>

        <Button id='cart' className={cls.navSelection} onClick={() => cart()}>
          <Badge badgeContent={badgeNotif} color='error'>
            <ShoppingCart />
          </Badge>
        </Button>
        <Button id='logout' className={cls.navSelection} onClick={logout}>
          Log out
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header
