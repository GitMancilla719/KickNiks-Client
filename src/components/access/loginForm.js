import { useDispatch, useSelector } from "react-redux"
import {useState, useEffect} from 'react'
import {userLogin} from '../../redux/slices/users.slice'
import {validateToken} from '../../redux/slices/validateToken.slice'
import {Box, TextField, Button, Typography, Grow} from '@material-ui/core'

import loginFormStyle from './loginForm.style'
import KNLOGO from '../../assets/knBlack.png'


const LoginForm = ({setModalLogin,setModalRegister}) => {
    const cls = loginFormStyle()
    const dispatch = useDispatch()

    const LoggedInUser = useSelector(state => state.UserSlice)
    const ValidateUser = useSelector(state => state.ValidateTokenSlice)

    const [user, setUser] = useState({
        _email : '',
        _password : ''
    })
    const showError = LoggedInUser? LoggedInUser.msg : ''

    const submitUser = (e) => {
        e.preventDefault()
        dispatch(userLogin(user))
    }
    const userValidation = () => {
        if(LoggedInUser){
            const getToken = LoggedInUser.token? LoggedInUser.token : undefined
            if(getToken) return dispatch(validateToken(getToken))
        }
    }

    const toRegister = () => {
        setModalLogin(false)
        setModalRegister(true)
    }

    useEffect(() => {
        userValidation()
        //if(ValidateUser) return history.push('/browse')
    }, [LoggedInUser, ValidateUser, userValidation])

    return (
        <Grow in={true}>
            <Box className={cls.container}>
                <img src={KNLOGO} alt="knlogo" height='40'/>
                <Typography align='center' className={cls.displayText}>YOUR ACCESS FOR EVERYTHING KICKNIKS</Typography>

                <Typography className={cls.errors}>{showError}</Typography>
            
                <form className={cls.form} onSubmit={submitUser}>
                    <TextField type='email' label='Email' onChange={e => setUser({...user, _email : e.target.value})}/>
                    <TextField type='password' label='Password' onChange={e => setUser({...user, _password : e.target.value})}/>  
                    <Button className={cls.loginBtn} type='submit' variant='contained'>login</Button>
                </form>
                
                <Typography align='center' className={cls.displayText}>
                    By logging in, you agree to KICKNIKS's <span className={cls.span}>Privacy Policy</span> and <span className={cls.span}>Terms of Use</span>.
                </Typography>
                <Typography align='center' className={cls.displayText}>
                    Not a member? <span className={cls.span} onClick={toRegister}>Sign up</span>
                </Typography>
            </Box>
        </Grow>
    )
}

export default LoginForm
