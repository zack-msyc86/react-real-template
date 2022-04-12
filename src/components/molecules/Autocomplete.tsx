import { Autocomplete as MUIAutocomplete } from '@mui/material'
import { useMemo, useState } from 'react'
import TextField from '../atoms/TextField'

type Option<T> = {
  value: T | null,
  label: string,
}

type Props<T> = {
  options: Array<Option<T>>,
  label?: string,
  value?: string | null,
  onChange: (e: T | null) => void,
}

const Autocomplete = <T=string>({options, label, onChange, value=null}: Props<T>) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(value)
  const optionLabels = useMemo(() => options.map(o => o.label), [options])
  const handler = (v: string | null) => {
    setSelectedLabel(v)
    onChange(options.find(o => o.label == v)?.value || null)
  }
  return (
    <MUIAutocomplete<string>
      value={selectedLabel}
      options={optionLabels}
      renderInput={(params) => <TextField {...params} label={label}/>}
      onChange={(_, value) => handler(value)}
    />
  )
}

export default Autocomplete