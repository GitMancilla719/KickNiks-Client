import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//Reducers
const UserSlice = createSlice({
    name : 'users',
    initialState : null,
    reducers : {
        LOGIN : (state, action) => {
            localStorage.setItem('authToken', action.payload.token)
            return state = action.payload
        },
        LOGOUT : (state, action) => {
            localStorage.removeItem('authToken', null)
            return state = null
        },
        FAILED : (state, action) => {
            localStorage.removeItem('authToken', null)
            return state = action.payload
        }
    }
})

export default UserSlice.reducer

//Actions
const { LOGIN, LOGOUT, FAILED } = UserSlice.actions
export const userLogin = (user) => async(dispatch) => {
    try {
        const userRes = await axios.post('http://localhost:5000/user/login', user)
        dispatch(LOGIN(userRes.data)) 
    } catch (error) {
        dispatch(FAILED(error.response.data))
        
    }
}
export const userLogout = () => (dispatch) => {
    try {
        dispatch(LOGOUT()) 
    } catch (error) {
        dispatch(FAILED(error.response.data.msg))
        
    }
}
