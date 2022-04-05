import MUIButton from '@mui/material/Button'

type Props = {
  children: React.ReactNode
}

const Button: React.VFC<Props> = (props) => {
  return <MUIButton variant="contained">
    { props.children }
  </MUIButton>;
}

export default Button