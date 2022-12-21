import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export const NavBar = ({ setUser }) => {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='main-div'>
      <div className="styles-div">
        <Link to="/orders"><strong>History</strong></Link>
        <Link to="/orders/new"><strong>Home</strong></Link>
        <Link to="" onClick={handleLogOut}><strong>Log Out</strong></Link>
      </div>
    </div>
  )
}