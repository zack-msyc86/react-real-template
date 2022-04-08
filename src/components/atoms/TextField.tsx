import { TextField as MUITextField, TextFieldProps} from '@mui/material'

const TextField = (props: TextFieldProps) => {
  return (
    <MUITextField {...props}/>
  )
}

TextField.defaultProps = {
  size: 'small'
}

export default TextField