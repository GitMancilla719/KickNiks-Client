import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ValidateTokenSlice = createSlice({
  name: 'validate',
  initialState: null,
  reducers: {
    VALIDATE: (state, action) => {
      return (state = action.payload)
    },
    FAILED: (state, action) => {
      return (state = action.payload)
    },
  },
})

export default ValidateTokenSlice.reducer

const { VALIDATE, FAILED } = ValidateTokenSlice.actions

export const validateToken = (token) => async (dispatch) => {
  try {
    const tokenRes = await axios.post('http://localhost:5000/user/tokenValidity', null, {
      headers: { authToken: token },
    })
    dispatch(VALIDATE(tokenRes.data))
  } catch (error) {
    dispatch(FAILED(false))
  }
}
