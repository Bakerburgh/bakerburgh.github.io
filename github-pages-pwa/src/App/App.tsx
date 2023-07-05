import React from 'react';
import { CssBaseline, CssVarsProvider, styled } from '@mui/joy';
import { Provider } from 'react-redux'
import { store, useAppSelector } from './store';
import Header from './Header';


const VerticalLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}))

function SelectedApp() {
  const apps = useAppSelector(store => store.apps);
  const selectedApp = apps.selectedApp;

  return <VerticalLayout>
    <Header headerText={selectedApp.headerText} />
    {selectedApp.render()}
  </VerticalLayout>
}

function App() {
  return <Provider store={store}>
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
      <SelectedApp />
    </CssVarsProvider>
  </Provider>
}

export default App;