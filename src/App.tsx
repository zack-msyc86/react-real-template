import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Routes from './config/routes';
import { BrowserRouter } from 'react-router-dom';

export default () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  )
}