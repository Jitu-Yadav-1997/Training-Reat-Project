import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, AppBar, Toolbar} from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../App';

export default function Dashboard2(props) {

  const history = useNavigate()

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const logout = () => {
      setTimeout(() => {
        history('/');props.setOpen(true);
        props.setMessage("Successfully Logged Out");
      }, 1000)
  }

  return (
    <Container style={{marginTop : '-275px', position:'fixed'}}>
    <Box sx={{ flexGrow: 1, paddingLeft: '10%' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20%' }}>
            User Dashboard
          </Typography>
          <Link to='/dashboard/profile'><Button style={{color: 'white'}}>Profile</Button></Link>
          <Link to='/dashboard/connection'><Button style={{color: 'white'}}>Connections</Button></Link>
          <Button onClick={logout} style={{color: 'white'}}>Logout</Button>
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

    <Outlet />
    </Container>
  )
}
