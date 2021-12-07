import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import NavBar from "./NavBar/NavBar";
import User from "../User/User";
import "./Header.css";
import logo from "../../Assets/images/FP.svg";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="header">
            {user.isAuthenticated ? (
                <User email={user.email} />
            ) : (
                <div className="guestWelcome">
                    <p> Welcome Guest</p>
                    <p> Please Register or Sign In</p>
                </div>
            )}

            <i className="fas fa-circle"></i>
            <div className="logoContainer">
                <img src={logo} alt="alt-logo" />
            </div>
            <NavBar isAuthenticated={user.isAuthenticated} />
        </div>
    );
};
export default Header;
