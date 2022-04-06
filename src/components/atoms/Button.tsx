import { Button as MUIButton, ButtonProps, styled } from '@mui/material'

type Props = ButtonProps & {
  children: React.ReactNode,
}

const StyledButton = styled(MUIButton)({
});


const Button: React.VFC<Props> = ({ children, ...props }) => {
  const defaultProp: ButtonProps = {
    variant: 'contained'
  }

  return (
    <StyledButton {...{...defaultProp, ...props}}>
      { children }
    </StyledButton>
  )
}

export default Button