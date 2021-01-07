import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Modal } from '@material-ui/core'

import Header from './components/Header'
import LandingPage from './components/browse/LandingPage'
import Cart from './components/browse/Cart'
import LoginForm from './components/access/loginForm'
import RegisterForm from './components/access/registerForm'
import AddProduct from './components/admin/addProduct'

//temp
import { getCart } from './redux/slices/product.slice'
import { useDispatch, useSelector } from 'react-redux'
import { validateToken } from './redux/slices/validateToken.slice'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegister, setModalRegister] = useState(false)

  const dispatch = useDispatch()
  const validateUser = useSelector((state) => state.ValidateTokenSlice)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) return dispatch(validateToken(token))
  }, [currentUser, modalLogin, modalRegister])

  // console.log('app', validateUser)
  validateUser && dispatch(getCart(validateUser.user_id))
  return (
    <>
      <BrowserRouter>
        <Header setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/admin/add-product' component={AddProduct} />
          <Route path='/user/shopping-cart' component={Cart} />
        </Switch>
      </BrowserRouter>

      <Modal open={modalLogin} onClose={() => setModalLogin(false)}>
        <LoginForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} setCurrentUser={setCurrentUser} />
      </Modal>
      <Modal open={modalRegister} onClose={() => setModalRegister(false)}>
        <RegisterForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
      </Modal>
    </>
  )
}

export default App
