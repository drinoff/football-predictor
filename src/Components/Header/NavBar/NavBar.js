import { Link } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => {
    return (
        <ul className = 'navigation'>
            <Link to = '/matches'>Matches</Link>
            <li>Predictions</li>
            <li>About</li>
            <li className = "contact">Contact</li>
            <li className = "login">Login</li>
            <li className = "register">Register</li>
        </ul>
    )
}
export default NavBar;