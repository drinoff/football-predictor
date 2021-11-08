import NavBar from './NavBar/NavBar';
import User from '../User/User';
import './Header.css';



const Header = () =>{
    return (
        <div className="header">
            <User />
            <NavBar />

        </div>
    )
}
export default Header;