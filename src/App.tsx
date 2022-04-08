import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { StrictMode } from 'react';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Router from './config/router';

export default () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Header menues={[{text: 'Login'}]}/>
        <Main>
          <Router/>
        </Main>
      </ThemeProvider>
    </StrictMode>
  )
}