import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './SignUp.css';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit} >
            <Box component="form"
              sx={{
                '& .MuiTextField-root': { m: 1.5, width: '35ch' },
              }}
              noValidate
              autoComplete="off">
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <TextField
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                      label="Your name"
                      id="outlined-search" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={this.handleChange}
                      value={this.state.email}
                      id="outlined-search"
                      name="email"
                      label="Email" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={this.handleChange}
                      value={this.state.password}
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      name="password" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={this.handleChange}
                      value={this.state.confirm}
                      id="outlined-password-input"
                      label="confirm password"
                      type="password"
                      name="confirm" />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Button variant="contained" type="sumbit">Sign Up</Button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}