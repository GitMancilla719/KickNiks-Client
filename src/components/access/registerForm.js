import { useDispatch, useSelector } from "react-redux"
import {useState, useEffect} from 'react'

import {Box, TextField, Button, Typography, Grow} from '@material-ui/core'
import {userRegister} from '../../redux/slices/registerUser.slice'
import RegisterFormStyle from './registerForm.style'
import KNLOGO from '../../assets/knBlack.png'


const RegisterForm = ({setModalLogin,setModalRegister}) => {
    const cls = RegisterFormStyle()
    const dispatch = useDispatch()

    const RegisterUser = useSelector(state => state.RegisterUserSlice)

    const [registerUser, setRegisterUser] = useState({
        _email : undefined,
        _password : undefined,
        _password2 : undefined,
        _username : undefined
    })

    const submitUser = (e) => {
        e.preventDefault()
        dispatch(userRegister(registerUser))
    }

    const sendToLogin = (e) => {
        if(RegisterUser){
            const getID = RegisterUser._id? RegisterUser._id : undefined
            if(getID) {
                setModalLogin(true)
                setModalRegister(false)
            }
        }
    }

    const showError = RegisterUser? RegisterUser.msg : ''

    useEffect(() => {
        sendToLogin()
    }, [RegisterUser, sendToLogin])
    
    return (
        <Grow in={true}>
            <Box className={cls.container}>
                <img src={KNLOGO} alt="knlogo" height='40'/>
                <Typography align='center' className={cls.displayText}>BE A MEMBER</Typography>
                <Typography align='center' className={cls.displayText}>
                    Create your account and get first access to the very best of KICKNIKS products.
                </Typography>

                <Typography className={cls.errors}>{showError}</Typography>
                <form className={cls.form} onSubmit={submitUser}>
                    <TextField type='email' label='Email' onChange={e => setRegisterUser({...registerUser, _email : e.target.value})}/>
                    <TextField type='password' label='Password' onChange={e => setRegisterUser({...registerUser, _password : e.target.value})}/>
                    <TextField type='password' label='Repeat Password' onChange={e => setRegisterUser({...registerUser, _password2 : e.target.value})}/> 
                    <TextField type='text' label='Username' onChange={e => setRegisterUser({...registerUser, _username : e.target.value})}/>   
                    <Button className={cls.loginBtn} type='submit' variant='contained'>REGISTER</Button>
                </form>
                <Typography align='center' className={cls.displayText}>
                    By creating an account, you agree to KICKNIKS's <span className={cls.span}>Privacy Policy</span> and <span className={cls.span}>Terms of Use</span>.
                </Typography>
            </Box>
        </Grow>
    )
}

export default RegisterForm
