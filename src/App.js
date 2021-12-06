import { Routes, Route } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

import "./App.css";

import Header from "./Components/Header/Header";
import Matches from "./Components/Matches/Matches";
import Predictions from "./Components/Predictions/Predictions";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CreatePrediction from "./Components/CreatePrediction/CreatePrediction";
import PredictionDetails from "./Components/Predictions/PredictionDetails/PredictionDetails";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import Register from "./Components/Register/Register";
import MyPredictions from "./Components/MyPredictions/MyPredictions";
import Editprediction from "./Components/Predictions/EditPrediction/EditPrediction";


const initialUserData = {
    email: '',
    accessToken: '',
    uid: '',
    isAuthenticated: false,
}

function App() {
    const [user, setUser] = useLocalStorage('user',initialUserData);


    const login = (userData)=>{
        setUser(userData);
    }
    const logout = ()=>{
        setUser(initialUserData);
    }
    const register = (userData)=>{
        setUser(userData);
    }

    return (
        <div className="App">
            <AuthContext.Provider value={{user,login,logout,register}}>
                <Header />

                <Routes>
                    <Route path="/" element={<Matches />} />
                    <Route path="predictions" element={<Predictions />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="create" element={<CreatePrediction />} />
                    <Route path="predictions/:match" element={<PredictionDetails />}/>
                    <Route path="predictions/:id/edit" element={<Editprediction />}/>
                    <Route path="myPredictions" element={<MyPredictions />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
