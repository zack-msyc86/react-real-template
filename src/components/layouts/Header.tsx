import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Theme, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Button from "../atoms/Button";
import { Key as KeyIcon, MoreVert as MoreIcon} from '@mui/icons-material';
import { To, useNavigate } from "react-router-dom";
import { useState } from "react";

type Menu = {
  text: string,
  to: To
}

const Header = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'))
  const [isOpenMore, setIsOpenMore] = useState(false)
  const menues: Array<Menu> = [
    // { text: 'Top', to: '/' },
  ]
  const handleDrawerItemClick = (to: To) => {
    setIsOpenMore(false)
    navigate(to)
  }
  const buttons = isMobile ? (
    <>
      <IconButton size="large" aria-label="display more actions" edge="end" color="inherit" onClick={() => setIsOpenMore(!isOpenMore)}>
        <MoreIcon />
      </IconButton>
      <Drawer open={isOpenMore} onClose={() => setIsOpenMore(false)} anchor='right' >
        <List>
          { menues.map(m => <ListItem button key={m.text} onClick={() => handleDrawerItemClick(m.to)}> <ListItemText primary={m.text} /> </ListItem>)}
        </List>
      </Drawer>
    </>
  ) : (
    menues.map(m => <Button color="inherit" variant="text" size="large" key={m.text} sx={{textTransform: 'none'}} onClick={() => navigate(m.to)}>{m.text}</Button>)
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar>
          <KeyIcon sx={{mr: 1}} onClick={() => navigate("/")}/>
          <Typography variant="h5" component="div" onClick={() => navigate("/")}>
            Test
          </Typography>
          { buttons }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header