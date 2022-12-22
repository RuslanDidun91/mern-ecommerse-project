import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Button } from '@mui/material';
import './Auth.css';


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth-main'>
      <div className='bg-image'>
        <h1>Join Wastemart today</h1>
        <Button variant="contained" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      </div>
    </main>
  );
}