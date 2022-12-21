import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import Cart from './Cart';
import './Header.css';

export default function Header({ user, setData, cart }) {

  return (
    <div className='main-nav'>
      <Link className='logo-div' to="/orders"><div></div></Link>
      <SearchBar setData={setData} />
      <span className='user-name'> <small>Welcome, </small>{user.name}</span>
      <Link><EmailIcon fontSize='large' /></Link>
      <Link to="/cart"><Cart cart={cart}/></Link>
    </div>
  );
}