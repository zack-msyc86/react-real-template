import { Container } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Main = ({children}: Props) => {
  return (
    <Container sx={{mt: 8}}>
      {children}
    </Container>
  )
}

export default Main