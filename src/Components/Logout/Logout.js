
import { useEffect, useContext} from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "@firebase/auth";

import AuthContext from "../../contexts/AuthContext";


const auth = getAuth();

const Logut = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
    signOut(auth).then(() => {
        logout();
        navigate("/")});
}, [navigate,logout]);
    return null
};

export default Logut;
