import { useState } from 'react';
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
    <div>
      <Button>
        Hello World
      </Button>
      <TextField />
      <div>{acValue}</div>
      <Autocomplete<string> options={acOptions} onChange={val => setAcValue(val) } value={acValue}/>
    </div>
  )
}

export default App