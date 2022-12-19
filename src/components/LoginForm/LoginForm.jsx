import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Login.css';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='login-div'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box component="form"
          sx={{
            '& .MuiTextField-root': { m: 3, width: '30ch' },
          }}
          noValidate
          autoComplete="off">

          <TextField
            onChange={handleChange}
            value={credentials.email}
            id="outlined-search"
            name="email"
            label="Email"
            type="search" />

          <TextField
            onChange={handleChange}
            value={credentials.password}
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </Box>
        <Button variant="contained" type="sumbit">Log In</Button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}