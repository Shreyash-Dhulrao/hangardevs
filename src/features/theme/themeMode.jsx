import { createSlice } from '@reduxjs/toolkit'

export const themeMode = createSlice({
  name: 'counter',
  initialState: {
    value: "dark"
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeTheme } = themeMode.actions

export default themeMode.reducer