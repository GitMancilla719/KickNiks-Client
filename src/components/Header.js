import { AppBar, Box, Button } from '@material-ui/core'
import HeaderStyle from './Header.style'
import knWhite from '../assets/knWhite.png'
import kicknuksWhite from '../assets/kickniksWhite.png'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../redux/slices/users.slice'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Header = ({ setModalLogin, setModalRegister }) => {
  const cls = HeaderStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const validateUser = useSelector((state) => state.ValidateTokenSlice)

  const status = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      document.getElementById('login').style.display = 'block'
      document.getElementById('register').style.display = 'block'
      document.getElementById('logout').style.display = 'none'
    } else {
      document.getElementById('login').style.display = 'none'
      document.getElementById('register').style.display = 'none'
      document.getElementById('logout').style.display = 'block'
    }
  }

  useEffect(() => {
    status()
  }, [])
  //kikniksACC@gmail.com

  const logout = () => {
    dispatch(userLogout())
    history.push('/')
    window.location.reload()
  }

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
        <Button id='logout' className={cls.navSelection} onClick={logout}>
          Log out
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header
