import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import  MatchItem  from "./MatchItem"; 

import "./Matches.css";


const Matches = () => {
    const [matches, setMatches] = useState();

    useEffect(() => {
        fetch('www.themealdb.com/api/json/v1/1/search.php?s=chicken',{
            redirect: 'follow'
        })
        .then(data => {
            console.log(data);
            setMatches(data.meals);
        })
    }, [])

    return (
        <div className="pageContainer" maxWidth="80%">
            {/* <Box
                className="matchesContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "55%" }}
            >
                <MatchItem>{matches[0].strMeal}</MatchItem>
            </Box>
            <Box
                className="matchDetailsContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "35%" }}
            /> */}
        </div>
    );
};

export default Matches;
