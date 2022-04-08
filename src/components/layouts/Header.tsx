import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Button from "../atoms/Button";
import { Menu as MenuIcon, MicNone } from '@mui/icons-material';

type Menu = {
  text: string,
}
type Props = {
  menues?: Array<Menu>,
}
const Header = ({menues=[]}: Props) => {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Real Template
          </Typography>
          {
            menues.map(m => <Button color="inherit" variant="text" key={m.text}>{m.text}</Button>)
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header