
import { useEffect, useContext} from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "@firebase/auth";

import AuthContext from "../../contexts/AuthContext";


const auth = getAuth();

const Logut = () => {
    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
    signOut(auth).then(() => {
        setUser(null);
        navigate("/")});
}, [navigate]);
    return null
};

export default Logut;
