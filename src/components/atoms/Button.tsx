import { Button as MUIButton, ButtonProps } from '@mui/material'
import { memo } from 'react'

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

export default memo(Button)