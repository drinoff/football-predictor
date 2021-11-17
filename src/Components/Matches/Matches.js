import { useState, useEffect } from "react";


import { Box } from "@mui/material";
import MatchItem from "./MatchItem";
import MatchDetail from "./MatchDetail";
import matchServices from "../../services/matchServices";

import "./Matches.css";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [matchDetail, setMatchDetail] = useState();
    const [h2h,seth2h] = useState();
    
    console.log(h2h,matches)
    useEffect(() => {
        matchServices.getAllMatches()
        .then((data) => {
            let sortedData = data.response.sort((a, b) =>
                a.league.country > b.league.country ? 1 : -1
            );
            setMatches(sortedData);
        })
        .catch((error) => console.log("error", error));
    }, []);
    const onMatchClickHandler = (id) => {
        const selectedMatch = matches.find((match) => match.fixture.id === id);
        setMatchDetail(selectedMatch);
        const homeId = selectedMatch.teams.home.id;
        const awayId = selectedMatch.teams.away.id;
        matchServices.getH2H(homeId,awayId)
        .then((data) => {
        seth2h(data)});
    };
    return (
        <div className="pageContainer" width="80%">
            <Box
                className="matchesContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "45%" }}
            >
                {matches.map((match) => (
                    <MatchItem
                        match={match}
                        key={match.fixture.id}
                        id={match.fixture.id}
                        onClick={onMatchClickHandler}
                    />
                ))}
            </Box>
            <Box
                className="matchDetailsContainer"
                sx={{ bgcolor: "#111827", height: "40%", width: "45%"}}
            >
                {!matchDetail 
                ? 
                "" 
                : 
                <MatchDetail
                 matchDetail={matchDetail}
                  h2h={h2h} 
                  />}
            </Box>
        </div>
    );
};

export default Matches;
