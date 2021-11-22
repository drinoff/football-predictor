import { useState, useEffect } from "react";
import matchServices from "../../services/matchServices";
import { Box } from "@mui/material";
import MatchItem from "../Matches/MatchItem";
import MatchPrediction from "./MatchPrediction/MatchPrediction";

import "./CreatePrediction.css";

const CreatePrediction = () => {
    const [predictionMatches, setPredictionMatches] = useState([]);
    const [selectedMatchPrediction, setSelectedMatchPrediction] = useState();
    const [matchDetails, setMatchDetails] = useState();
    const [selectedMatchH2H, setSelectedMatchH2h] = useState();

    useEffect(() => {
        matchServices
            .getAllMatches()
            .then((data) => {
                let sortedData = data.response.sort((a, b) =>
                    a.league.country > b.league.country ? 1 : -1
                );
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
        const homeId = selectedMatch.teams.home.id;
        const awayId = selectedMatch.teams.away.id;
        matchServices.getH2H(homeId, awayId).then((data) => {
            
            setSelectedMatchH2h(data);
            
        });
    };
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
                <form action="POST" className="createPrediction">
                    <div className="match">
                        <label htmlFor="match">Match</label>
                        <input
                            className="predictionFormStyle"
                            id="match"
                            type="text"
                        />
                    </div>

                    <div className="prediction">
                        <label htmlFor="prediction">Prediction</label>
                        <input
                            className="predictionFormStyle"
                            id="prediction"
                            type="text"
                        />
                    </div>

                    <div className="predictionDescContainer">
                        <label htmlFor="predictionDesc">Description</label>
                        <textarea id="predictionDesc" type="text" />
                    </div>
                    <input
                        className="contactFormButton"
                        type="button"
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
