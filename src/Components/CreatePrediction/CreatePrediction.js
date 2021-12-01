import { useState, useEffect, useContext } from "react";

import { Box } from "@mui/material";
import MatchItem from "../Matches/MatchItem";
import MatchPrediction from "./MatchPrediction/MatchPrediction";

import AuthContext from "../../contexts/AuthContext";
import matchServices from "../../services/matchServices";
import predictionServices from "../../services/predictionServices";


import "./CreatePrediction.css";

const CreatePrediction = () => {
    const [predictionMatches, setPredictionMatches] = useState([]);
    const [selectedMatchPrediction, setSelectedMatchPrediction] = useState();
    const [matchDetails, setMatchDetails] = useState();
    const [selectedMatchH2H, setSelectedMatchH2h] = useState();
    const [matchInputName,setMatchInputName] = useState();
    const [isVisible, setIsVisible] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        matchServices
            .getAllMatches()
            .then((data) => {
                let sortedData = data.response.sort((a, b) =>
                    a.league.country > b.league.country ? 1 : -1
                ).filter((match) => match.fixture.status.short === "HT" || match.fixture.status.short === "NS");
                setPredictionMatches(sortedData);
            })
            .catch((error) => console.log("error", error));
    }, []);
    const onMatchClickHandler = (fixture) => {
        matchServices.getMatchPrediction(fixture).then((data) => {
            setSelectedMatchPrediction(data);
        });
        const selectedMatch = predictionMatches.find(
            (match) => match.fixture.id === fixture
        );
        setMatchDetails(selectedMatch);
        setMatchInputName(selectedMatch);
        const homeId = selectedMatch.teams.home.id;
        const awayId = selectedMatch.teams.away.id;
        matchServices.getH2H(homeId, awayId).then((data) => {
            
            setSelectedMatchH2h(data);
        });
    };

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        const match = formData.get('match');
        const prediction = formData.get('prediction');
        const predictionDesc = formData.get('predictionDesc');
        const email = user.email;
        let body = {
            match,
            prediction,
            predictionDesc,
            selectedMatchPrediction,
            matchDetails,
            selectedMatchH2H,
            email
        }
        predictionServices.postPrediction(body)
        setMatchInputName();
        setSelectedMatchPrediction();
        e.target.reset();
        setIsVisible('successModalPopUP');
        setTimeout(() => {
            setIsVisible('');
        }, 3000);
    }
    return (
        <div className="predictionPageContainer">
            <Box
                className="predictionContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "33%" }}
            >
                {predictionMatches.map((match) => (
                    <MatchItem
                        match={match}
                        key={match.fixture.id}
                        fixture={match.fixture.id}
                        onClick={onMatchClickHandler}
                    />
                ))}
            </Box>
            <div className="formWrapper">
            <p id = 'successModal' className={isVisible}>S u c c e s s</p>
                <form action="POST" className="createPrediction" onSubmit={onFormSubmitHandler}>
                    <div className="match">
                        <label htmlFor="match">Match</label>
                        <input
                            className="predictionFormStyle"
                            id="match"
                            type="text"
                            name="match"
                            defaultValue={matchInputName
                                ? matchInputName.teams.home.name +" - "+ matchInputName.teams.away.name
                            : ""}
                        />
                    </div>

                    <div className="prediction">
                        <label htmlFor="prediction">Prediction</label>
                        <input
                            className="predictionFormStyle"
                            id="prediction"
                            type="text"
                            name="prediction"
                        />
                    </div>

                    <div className="predictionDescContainer">
                        <label htmlFor="predictionDesc">Description</label>
                        <textarea id="predictionDesc" type="text" name="predictionDesc"/>
                    </div>
                    <input
                        className="contactFormButton"
                        type="submit"
                        value="Create Prediction"
                    />
                </form>
            </div>
            <Box
                className="matchPredictionDetailsContainer"
                sx={{ bgcolor: "#111827", height: "40%", width: "33%" }}
            >
                {selectedMatchPrediction ? (
                    <MatchPrediction
                        prediction={selectedMatchPrediction}
                        h2h={selectedMatchH2H}
                        matchDetail = {matchDetails}
                    />
                ) : (
                    ""
                )}
            </Box>
        </div>
    );
};

export default CreatePrediction;
