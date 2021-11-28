import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Matches from "./Components/Matches/Matches";
import Predictions from "./Components/Predictions/Predictions";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CreatePrediction from "./Components/CreatePrediction/CreatePrediction";
import PredictionDetails from "./Components/Predictions/PredictionDetails/PredictionDetails";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Matches />} />
                <Route path="predictions" element={<Predictions />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="create" element={<CreatePrediction />} />
                <Route path="predictions/:match" element = {<PredictionDetails />} />
            </Routes>
        </div>
    );
}

export default App;
