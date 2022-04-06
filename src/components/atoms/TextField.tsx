import { TextField as MUITextField, TextFieldProps, styled } from '@mui/material'

type Props = TextFieldProps

const StyledTextField = styled(MUITextField)({
});


const TextField: React.VFC<Props> = (props) => {
  const defaultProp: Props = {
    size: 'small'
  }

  return (
    <StyledTextField {...{...defaultProp, ...props}}/>
  )
}

export default TextField