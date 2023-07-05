import { createSlice } from '@reduxjs/toolkit'

export interface NavRoute {
  label: string;
  path: string;
  showInNavMenu: boolean;
}

var defaultRoutes: NavRoute[] = [
  {
    label: 'Home',
    path: '/',
    showInNavMenu: true
  },
  {
    label: 'Domino Counter',
    path: '/dominoCounter',
    showInNavMenu: true
  }  
]

export const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    route: '/',
    navItems: defaultRoutes
  },
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const { } = routesSlice.actions

export default routesSlice.reducer