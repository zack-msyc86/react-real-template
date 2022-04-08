import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { StrictMode, useState } from 'react';
import Autocomplete from './components/molecules/Autocomplete';
import Button from './components/atoms/Button';
import TextField from './components/atoms/TextField';

const App = () => {
  const [acValue, setAcValue] = useState('a')
  const acOptions = [
    {value: 'a', label: 'aaa'},
    {value: 'b', label: 'bbb'},
    {value: 'c', label: 'ccc'},
    {value: 'd', label: 'ddd'},
  ]
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Button>
          Hello World
        </Button>
        <TextField />
        <div>{acValue}</div>
        <Autocomplete<string> options={acOptions} onChange={val => setAcValue(val) } value={acValue}/>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App