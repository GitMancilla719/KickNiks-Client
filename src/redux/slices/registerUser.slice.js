import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//Reducers
const RegisterUserSlice = createSlice({
    name : 'register',
    initialState : null,
    reducers : {
        REGISTER : (state, action) => {
            return state = action.payload
        },
    }
})

export default RegisterUserSlice.reducer

//Actions
const { REGISTER } = RegisterUserSlice.actions

export const userRegister = (user) => async(dispatch) => {
    try {
        const userRes = await axios.post('http://localhost:5000/user/register', user)
        dispatch(REGISTER(userRes.data)) 
    } catch (error) {
        dispatch(REGISTER(error.response.data))
        
    }
}

