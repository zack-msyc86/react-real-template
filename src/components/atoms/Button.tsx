import { Button as MUIButton, ButtonProps } from '@mui/material'

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MUIButton {...props}>
      { children }
    </MUIButton>
  )
}

Button.defaultProps = {
  variant: 'contained'
}

export default Button