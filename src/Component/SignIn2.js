import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Link as Go } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignUp(props) {

  const [showLoader, setShowLoader] = React.useState(false);

  const history = useNavigate()

  const signIn = (e) => {
    e.preventDefault();
    setShowLoader(!showLoader);
    console.log(formData);
    setTimeout(() => {
      history('/login');
      props.setOpen(true);
      props.setMessage("Successfully Signed In");
    }, 2000)
  }

  const [formData, setFormDta] = React.useState({
    firstName: '',lastName: '', gender: '', dob: null, email: '', phone: '', password: '', check: false
  })

  const handleOnChange = (e) => {
      const { name, value} = e.target;
      setFormDta({...formData, [name] : value})
  }

  const accept = (e) => {
    setFormDta({ ...formData, check: !formData.check })
  }

  return (
    <div style={{ marginLeft: '50%', marginTop: 5 }}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#9bb0b4'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3, margin: 2 }} onSubmit={signIn}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    value={formData.gender}
                    labelId="gender"
                    id="gender"
                    label="Gender"
                    name="gender"
                    onChange={handleOnChange}
                  >
                    <MenuItem key="Male" value="M" >Male</MenuItem>
                    <MenuItem key="Femal" value="F">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="gender">Date Of Birth</InputLabel>
                <TextField fullWidth
                  id="birthDate"
                  type="date"
                  name="gender"
                  value={formData.dob}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="password"
                  value={formData.password}
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  onChange={handleOnChange}
                  />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={formData.check} color="primary" onClick={accept} />}
                  label="I agree with terms and condition of the user Dashboard."
                />
              </Grid>
            </Grid>
            <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, height: '50px' }}
                  disabled={!(formData.firstName && formData.lastName && formData.email && formData.phone && formData.check)}>
                  {showLoader ? <CircularProgress color="secondary" /> : 'Sign up'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Go to='/login' variant="body2">
                  Already have an account? Log in
                </Go>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}