import { Box, ThemeProvider } from '@mui/material';
import theme from './theme';
import { StrictMode, useState } from 'react';
import Autocomplete from './components/molecules/Autocomplete';
import Button from './components/atoms/Button';
import TextField from './components/atoms/TextField';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';

const App = () => {
  const [acValue, setAcValue] = useState<string | null>(null)
  const acOptions = [
    {value: 'a', label: 'aaa'},
    {value: 'b', label: 'bbb'},
    {value: 'c', label: 'ccc'},
    {value: 'd', label: 'ddd'},
  ]
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Header menues={[{text: 'Login'}]}/>
        <Main>
          {[...Array(1000)].map(() => <Button> Hello World </Button>)}
          <TextField />
          <div>{acValue}</div>
          <Autocomplete options={acOptions} onChange={val => setAcValue(val) } value={acValue}/>
        </Main>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App