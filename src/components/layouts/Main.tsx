import { Box } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Main = ({children}: Props) => {
  return (
    <Box sx={{mt: 8, pt: 1}}>
      {children}
    </Box>
  )
}

export default Main