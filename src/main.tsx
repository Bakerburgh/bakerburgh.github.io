import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { CssBaseline, CssVarsProvider } from '@mui/joy'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider defaultMode='dark'>
        <CssBaseline/>
        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>,
)
