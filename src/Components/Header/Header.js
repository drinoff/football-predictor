import NavBar from './NavBar/NavBar'
import PlayerOne from '../../../public/images/playerOne.svg';
import PlayerTwo from '../../../public/images/playerTwo.svg';
import './header.css'

const Header = () =>{
    return (
        <div className="header">
            <img src={PlayerOne} alt="" />
            <img src={PlayerTwo} alt="" />
            <img src={PlayerOne} alt="" />
            <NavBar />

        </div>
    )
}
export default Header;