import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import './Header.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 13,
    padding: '0 4px',
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="error">
        <Link to="/cart"><ShoppingCartIcon fontSize='large' color='string' className='button' /></Link>
      </StyledBadge>
    </IconButton>
  );
}