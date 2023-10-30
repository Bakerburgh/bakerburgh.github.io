import { createSlice } from '@reduxjs/toolkit'
import { AppKey, AppRegistry } from './AppMetadata';



export const appSwitcherSlice = createSlice({
  name: 'apps',
  initialState: {
    selectedApp: AppRegistry['home']
  },
  reducers: {
    switchToApp: (state, action: {payload: AppKey}) => {
      state.selectedApp = AppRegistry[action.payload];
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchToApp } = appSwitcherSlice.actions

export default appSwitcherSlice.reducer