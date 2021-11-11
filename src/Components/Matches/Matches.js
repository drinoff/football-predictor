import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import  MatchItem  from "./MatchItem"; 

import "./Matches.css";


const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('/.netlify/functions/fetchMatches')
            .then(data => {
                console.log(data)
                setMatches(data);
                
            })
            .catch(err => console.log(err));
    },[]);
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
    )
};

export default Matches;
