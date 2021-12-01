import '../utils/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const login = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
};

const authServices = {
    login,
};


export default authServices;