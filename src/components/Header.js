import { AppBar, Typography, Box, Button} from '@material-ui/core'
import HeaderStyle from './Header.style'
import knWhite from '../assets/knWhite.png'
import kicknuksWhite from '../assets/kickniksWhite.png'

const Header = ({setModalLogin, setModalRegister}) => {
    const cls = HeaderStyle()
    return (
        <AppBar position="static" className={cls.appBar}>
            <Box className={cls.nav}>
                <img src={knWhite} alt="" width='50'/>
                <img src={kicknuksWhite} alt="" width='100'/>
            </Box>
           
            <Box className={cls.nav}>
                <Button className={cls.navSelection} onClick={()=>setModalLogin(true)}>Login</Button>
                <Button className={cls.navSelection} onClick={()=>setModalRegister(true)}>Sign Up</Button>
            </Box>
        </AppBar>
    )
}

export default Header
