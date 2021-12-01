import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = ({isAuthenticated}) => {
    return (
        <ul className = 'navigation'>
            <Link to='/' className='li'>Matches</Link>
            <Link to='predictions' className='li'>Predictions</Link>
            <Link to='about' className='li'>About</Link>
            <Link to='contact' className = "contact li">Contact</Link>
            {isAuthenticated
            ? <Link to='logout' className = "logout li">Logout</Link>
            : <><Link to='login' className = "login li">Login</Link>
                <Link to='register' className = "register li">Register</Link>
                </>}
            
            
        </ul>
    )
}
export default NavBar;