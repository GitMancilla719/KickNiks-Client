import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Modal } from '@material-ui/core'

import Header from './components/Header'
import LandingPage from './components/browse/LandingPage'
import LoginForm from './components/access/loginForm'
import RegisterForm from './components/access/registerForm'
import AddProduct from './components/admin/addProduct'
import ItemView from './components/browse/ItemView'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegister, setModalRegister] = useState(false)

  useEffect(() => {}, [currentUser, modalLogin, modalRegister])

  return (
    <>
      <BrowserRouter>
        <Header setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/admin/add-product' component={AddProduct} />
          <Route path='/item' component={ItemView} />
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
