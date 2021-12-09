
import { useEffect, useContext} from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "@firebase/auth";

import AuthContext from "../../contexts/AuthContext";


const auth = getAuth();

const Logut = () => {
    const {logout,user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
    signOut(auth).then(() => {
        logout();
        console.log(user)
        navigate("/")});
}, [navigate,logout,user]);
    return null
};

export default Logut;
