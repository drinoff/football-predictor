import '../utils/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const login = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
};

const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);  
}

const authServices = {
    login,
    register
};


export default authServices;