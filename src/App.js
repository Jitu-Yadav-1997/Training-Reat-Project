import './App.css';
import React from 'react';
import SignIn from './Component/SignIn';
import SignIn2 from './Component/SignIn2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login2 from './Component/Login2';
import Dashboard2 from './Component/Dashboard2';
import Profile from './Component/Profile';
import Connections from './Component/Connections';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toast from './Component/Toast';
import Alert from '@mui/material/Alert';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = React.useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode || 'light';
  });
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  }

  React.useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode])

  const colorMode = React.useMemo(
    
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <div className='App App-header'>

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn2 setOpen={setOpen} setMessage={setMessage} />} />
            <Route path='/login' element={<Login2 setOpen={setOpen} setMessage={setMessage} />}/>
            <Route path='/dashboard' element={<Dashboard2 setOpen={setOpen} setMessage={setMessage}/>}>
              <Route path='/dashboard/profile' element={<Profile />}/>
              <Route path='/dashboard/connection' element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
    <Toast open={open} onClose={handleClose}>
        <Alert severity='success' sx={{width:'100%'}}>{message}</Alert>
    </Toast>
    </div>
  );
}

export default App;
