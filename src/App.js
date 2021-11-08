import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from"./Components/Header/Header";
import Matches from "./Components/Matches/Matches";

function App() {
    return (
    <div className = "App" >

        <Header />

        <Routes>
        <Route path="/matches" element={<Matches />} />
        
      </Routes>
    </div>)
};

export default App;