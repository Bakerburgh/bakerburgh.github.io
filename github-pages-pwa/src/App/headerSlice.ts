import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    text: 'Welcome!',
  },
  reducers: {
    setHeaderText: (state, action: {payload: string}) => {
      state.text = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setHeaderText } = headerSlice.actions

export default headerSlice.reducer