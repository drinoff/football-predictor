import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import MatchItem from "./MatchItem";

import "./Matches.css";

const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch("https://v3.football.api-sports.io/fixtures?live=all", {headers:{"x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef"}})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }, []);
    return (
        <div className="pageContainer" width="80%">
            <Box
                className="matchesContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "55%" }}
            >
                {/* {matches.map(match => <MatchItem
                match = {match}
                key = {match.id}
                />)} */}
            </Box>
            <Box
                className="matchDetailsContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "35%" }}
            />
        </div>
    );
};

export default Matches;
