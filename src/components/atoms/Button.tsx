import { Button as MUIButton, ButtonProps, styled } from '@mui/material'

type Props = ButtonProps & {
  children: React.ReactNode,
}

const StyledButton = styled(MUIButton)({
});


const Button: React.VFC<Props> = ({ children, ...buttonProps }) => {
  return (
    <StyledButton {...buttonProps}>
      { children }
    </StyledButton>
  )
}

export default Button