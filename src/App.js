import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Header from "./Components/Header/Header";
import Matches from "./Components/Matches/Matches";
import Predictions from "./Components/Predictions/Predictions";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CreatePrediction from "./Components/CreatePrediction/CreatePrediction";
import PredictionDetails from "./Components/Predictions/PredictionDetails/PredictionDetails";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";

function App() {
    const [user, setUser] = useState({
        email: '',
        accessToken: '',
        uid: '',
        isAuthenticated: false,
    });

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser({
                email: user?.email,
                accessToken: user?.accessToken,
                uid: user?.uid,
                isAuthenticated: true,
            });
        });
    }, [auth]);

    console.log(user);
    return (
        <div className="App">
            <AuthContext.Provider value={user}>
                <Header />

                <Routes>
                    <Route path="/" element={<Matches />} />
                    <Route path="predictions" element={<Predictions />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="create" element={<CreatePrediction />} />
                    <Route
                        path="predictions/:match"
                        element={<PredictionDetails />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
