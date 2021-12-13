import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import BasicModal from "../BasicModal/BasicModal";
import MatchItem from "../Matches/MatchItem";
import MatchPrediction from "./MatchPrediction/MatchPrediction";

import AuthContext from "../../contexts/AuthContext";
import matchServices from "../../services/matchServices";
import predictionServices from "../../services/predictionServices";

import "./CreatePrediction.css";

const CreatePrediction = () => {
    const navigate = useNavigate();
    const [predictionMatches, setPredictionMatches] = useState([]);
    const [selectedMatchPrediction, setSelectedMatchPrediction] = useState();
    const [matchDetails, setMatchDetails] = useState();
    const [selectedMatchH2H, setSelectedMatchH2h] = useState();
    const [matchInputName, setMatchInputName] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        matchServices
            .getAllMatches()
            .then((data) => {
                let sortedData = data.data.response
                    .sort((a, b) =>
                        a.league.country > b.league.country ? 1 : -1
                    )
                    .filter(
                        (match) =>
                            match.fixture.status.short === "HT" ||
                            match.fixture.status.short === "NS"
                    );
                setPredictionMatches(sortedData);
            })
            .catch((error) => console.log("error", error));
    }, []);
    const onMatchClickHandler = (fixture) => {
        matchServices.getMatchPrediction(fixture).then((data) => {
            setSelectedMatchPrediction(data.data);
        });
        const selectedMatch = predictionMatches.find(
            (match) => match.fixture.id === fixture
        );
        setMatchDetails(selectedMatch);
        setMatchInputName(selectedMatch);
        const homeId = selectedMatch.teams.home.id;
        const awayId = selectedMatch.teams.away.id;
        matchServices.getH2H(homeId, awayId).then((data) => {
            setSelectedMatchH2h(data.data);
        });
    };

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        const match = formData.get("match");
        const prediction = formData.get("prediction");
        const predictionDesc = formData.get("predictionDesc");
        const email = user.email;
        if (!match || !prediction || !predictionDesc) {
            setError(null);
            setOpenModal(true);
            setError("Please fill all the fields");
            setTimeout(() => {
                setOpenModal(false);
            }, 1000);
        } else {
            let body = {
                match,
                prediction,
                predictionDesc,
                selectedMatchPrediction,
                matchDetails,
                selectedMatchH2H,
                email,
            };
            predictionServices.postPrediction(body);
            setMatchInputName();
            setSelectedMatchPrediction();
            e.target.reset();
            setError(null);
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
                navigate("/predictions");
            }, 2000);
        }
    };
    return (
        <div className="predictionPageContainer">
            <BasicModal
                openModal={openModal}
                msg="Succes"
                secondMsg="Your prediction has been submitted"
                errorMsg={error}
            />
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
                <form
                    action="POST"
                    className="createPrediction"
                    onSubmit={onFormSubmitHandler}
                >
                    <div className="match">
                        <label htmlFor="match">Match</label>
                        <input
                            className="predictionFormStyle"
                            id="match"
                            type="text"
                            name="match"
                            placeholder="Please pick a match from left hand side window"
                            defaultValue={
                                matchInputName
                                    ? matchInputName.teams.home.name +
                                      " - " +
                                      matchInputName.teams.away.name
                                    : ""
                            }
                        />
                    </div>

                    <div className="prediction">
                        <label htmlFor="prediction">Prediction</label>
                        <select
                            className="predictionFormStyle"
                            id="prediction"
                            type="text"
                            name="prediction"
                        >
                            <option value="1">1</option>
                            <option value="X">X</option>
                            <option value="2">2</option>
                            <option value="1X">1X</option>
                            <option value="X2">X2</option>
                            <option value="Over 2,5">Over 2,5</option>
                            <option value="Under 2,5">Under 2,5</option>
                            <option value="Over 1,5">Over 1,5</option>
                            <option value="Under 1,5">Under 1,5</option>
                        </select>
                    </div>

                    <div className="predictionDescContainer">
                        <label htmlFor="predictionDesc">Description</label>
                        <textarea
                            id="predictionDesc"
                            type="text"
                            name="predictionDesc"
                        />
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
                        matchDetail={matchDetails}
                    />
                ) : (
                    ""
                )}
            </Box>
        </div>
    );
};

export default CreatePrediction;
