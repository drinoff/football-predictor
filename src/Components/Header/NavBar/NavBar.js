import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
    return (
        <ul className = 'navigation'>
            <Link to='matches' className='li'>Matches</Link>
            <Link to='predictions' className='li'>Predictions</Link>
            <Link to='about' className='li'>About</Link>
            <Link to='contact' className = "contact li">Contact</Link>
            <Link to='login' className = "login li">Login</Link>
            <Link to='register' className = "register li">Register</Link>
        </ul>
    )
}
export default NavBar;