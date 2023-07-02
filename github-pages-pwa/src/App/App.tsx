import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, CssVarsProvider, styled } from '@mui/joy';
import { Provider } from 'react-redux'
import { store } from './store';
import routes from './routes';


const router = createBrowserRouter(routes);

const VerticalLayout = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}))

function App() {
  return <Provider store={store}>
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
        <VerticalLayout>
          <RouterProvider router={router} />
        </VerticalLayout>
    </CssVarsProvider>
  </Provider>
}

export default App;