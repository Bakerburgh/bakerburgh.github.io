import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react';
import HomeApp from '../apps/Home/HomeApp';
import DominoCounter from '../apps/DominoCounter/DominoCounter';

export interface AppSwitcherOption {
  label: string;
  headerText: string;
  render: () => ReactNode
}

export const AppList: AppSwitcherOption[] = [
  {
    label: 'Home',
    headerText: 'Welcome!',
    render: () => <HomeApp/>
  },
  {
    label: 'Domino Counter',
    headerText: 'Domino Counter',
    render: () => <DominoCounter/>
  }  
]

export const appSwitcherSlice = createSlice({
  name: 'apps',
  initialState: {
    selectedApp: AppList[0]
  },
  reducers: {
    switchToApp: (state, action: {payload: AppSwitcherOption}) => {
      state.selectedApp = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchToApp } = appSwitcherSlice.actions

export default appSwitcherSlice.reducer