import NavBar from './NavBar/NavBar'
import PlayerOne from '../../Assets/images/playerOne.svg';
import PlayerTwo from '../../Assets/images/playerTwo.svg';
import PlayerThree from '../../Assets/images/playerTwo.svg';
import './header.css'

const Header = () =>{
    return (
        <div className="header">
            <img src={PlayerOne} alt="" />
            <img src={PlayerTwo} alt="" />
            <img src={PlayerThree} alt="" />
            <NavBar />

        </div>
    )
}
export default Header;