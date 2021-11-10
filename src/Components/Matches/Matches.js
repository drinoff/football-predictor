import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import  MatchItem  from "./MatchItem"; 

import "./Matches.css";


const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch("https://football-predictor-3416d-default-rtdb.europe-west1.firebasedatabase.app/liveMatches.json")
            .then(res => res.json())
            .then(data => {
                console.log(data.liveMatches)
                setMatches(data.liveMatches);
                
            })
            .catch(err => console.log(err));
    },[]);
    return (
        <div className="pageContainer" width="80%">
            <Box
                className="matchesContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "55%" }}
            >
                {matches.map(match => <MatchItem
                match = {match}
                key = {match.id}
                />)}
            </Box>
            <Box
                className="matchDetailsContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "35%" }}
            />
        </div>
    )
};

export default Matches;
