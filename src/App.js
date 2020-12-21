import {useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Modal } from '@material-ui/core'

import Header from './components/Header'
import LoginForm from './components/access/loginForm'
import RegisterForm from './components/access/registerForm'
import GetProducts from './components/browse/GetProducts'
import AddProduct from './components/admin/addProduct'

function App() {
 
  //const [currentUser, setCurrentUser] = useState()
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegister, setModalRegister] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header 
          setModalLogin={setModalLogin} 
          setModalRegister={setModalRegister}
        />
        <Switch>
          <Route path="/" exact component={GetProducts}/>
          <Route path="/add-product" component={AddProduct}/>
        </Switch>
      </BrowserRouter>

      <Modal open={modalLogin} onClose={()=>setModalLogin(false)}>
        <LoginForm setModalLogin={setModalLogin} setModalRegister={setModalRegister}/>
      </Modal>
      <Modal open={modalRegister} onClose={()=>setModalRegister(false)}>
        <RegisterForm setModalLogin={setModalLogin} setModalRegister={setModalRegister}/>
      </Modal>
     
      
    </>
  );
}

export default App;
