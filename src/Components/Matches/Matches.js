import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import MatchItem from "./MatchItem";
import MatchDetail from "./MatchDetail";

import "./Matches.css";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [matchDetail, setMatchDetail] = useState();

    useEffect(() => {
        fetch(
            " https://v3.football.api-sports.io/fixtures?date=2021-11-13&timezone=Europe/London",
            {
                headers: {
                    "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
                },
            }
        )
            .then((res) => res.json())
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
    };
    return (
        <div className="pageContainer" width="80%">
            <Box
                className="matchesContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "55%" }}
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
                sx={{ bgcolor: "#111827", height: "auto", width: "35%" }}
            >
                {!matchDetail ? "" : <MatchDetail matchDetail={matchDetail} />  }
            </Box>
        </div>
    );
};

export default Matches;
