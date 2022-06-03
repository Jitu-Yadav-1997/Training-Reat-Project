import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login2(props) {

  const [showLoader, setShowLoader] = React.useState(false);
  const [loginData, setLoginData] = React.useState({email : '', password : ''})

  const history = useNavigate()

  const login = (event) => {
    event.preventDefault();
    setShowLoader(!showLoader);
    console.log(loginData);
    setTimeout(() => {
      history("/dashboard/profile")
      props.setOpen(true);
      props.setMessage("Successfully Logged In");
    }, 2000)
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setLoginData({...loginData, [name] : value});
  }

  return (
    <div style={{marginLeft : '50%'}}>
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor : '#9bb0b4'
          }}
        >
            <Typography component="h1" variant="h5">
                Log In
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3, margin: 2, top: '50%' }} onSubmit={login}>
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                          <TextField
                            name="email"
                            value={loginData.email}
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            type="email"
                            onChange={handleOnChange}
                            autoFocus
                          />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                          <TextField
                            name="password"
                            value={loginData.password}
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            onChange={handleOnChange}
                          />
                      </Grid>
                  </Grid>
                  <Button fullWidth
                          type="submit"
                          variant="contained"
                          sx={{ mt: 3, mb: 2, height:'50px' }}
                          disabled={!(loginData.email && loginData.password)}>
                      {showLoader ? <CircularProgress color="secondary" /> : 'Log In'}
                  </Button>
            </Box>
        </Box>
    </Container>
    </div>
  )
}
