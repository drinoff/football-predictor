import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import NavBar from "./NavBar/NavBar";
import User from "../User/User";
import "./Header.css";

const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    console.log(email,isAuthenticated);

    return (
        <div className="header">
            {isAuthenticated ? (
                <User email={email} />
            ) : (
                <div className="guestWelcome">
                    <p> Welcome Guest</p>
                    <p> Please Register or Sign In</p>
                </div>
            )}
            <NavBar isAuthenticated/>
        </div>
    );
};
export default Header;
