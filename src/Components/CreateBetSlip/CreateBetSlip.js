import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import BasicModal from "../BasicModal/BasicModal";
import MatchSkeletonLoader from "../Matches/MatchSkeletonLoader/MatchSkeletonLoader";
import MatchItem from "../Matches/MatchItem";

import { isAuth } from "../../HOC/isAuth";
import matchServices from "../../services/matchServices";
import "./CreateBetSlip.css";

const CreatePrediction = () => {
    const [matches, setMatches] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        matchServices.getAllMatches().then((matches) => {
            setMatches(matches.data.response);
        });
    }, []);
    console.log(matches)
    const onMatchClickHandler = (id) => {
        let currentMatch = matches.find((match) => match.fixture.id === id);
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
                className="slipContainer"
                sx={{
                    bgcolor: "#111827",
                    height: "80vh",
                    width: "45%",
                    marginTop: "5vh",
                }}
            >
                {matches ? (
                        matches.map((match) => (
                            <MatchItem
                                match={match}
                                key={match.fixture.id}
                                id={match.fixture.id}
                                onClick={onMatchClickHandler}
                            />
                        ))
                    ) : (
                        <MatchSkeletonLoader />
                    )}
            </Box>
            <Box
                className="slipContainer"
                sx={{
                    bgcolor: "#111827",
                    height: "80vh",
                    width: "45%",
                    marginTop: "5vh",
                }}
            >
                <p className="firstMatch"></p>
                <p className="secondMatch"></p>
                <p className="thirdMatch"></p>
                <p className="forthMatch"></p>
                <p className="fifthMatch"></p>
            </Box>
        </div>
    );
};

export default isAuth(CreatePrediction);
