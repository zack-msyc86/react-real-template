import { Autocomplete as MUIAutocomplete, AutocompleteProps, styled } from '@mui/material'
import TextField from '../atoms/TextField'

type Option<T> = {
  value: T,
  label: string,
}

type Props<T> = {
  options: Array<Option<T>>,
  label?: string,
  value?: T,
  onChange: (e: T) => void,
}

const Autocomplete = <T,>({options, label, onChange, value}: Props<T>) => {
  return (
    <MUIAutocomplete<Option<T>>
      isOptionEqualToValue={(option, value) => (option as Option<T>).value === (value as Option<T>).value}
      value={options.find(o => o.value == value)}
      options={options}
      renderInput={(params) => <TextField {...params} label={label}/>}
      onChange={(_, value) => onChange((value as Option<T>).value)}
    />
  )
}

export default Autocomplete