import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import NavBar from "./NavBar/NavBar";
import User from "../User/User";
import "./Header.css";

const Header = () => {
    const { user } = useContext(AuthContext);

    console.log(user.email,user.isAuthenticated);

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
            <NavBar isAuthenticated = {user.isAuthenticated}/>
        </div>
    );
};
export default Header;
