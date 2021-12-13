import { useState, useEffect } from "react";

import MatchItem from "./MatchItem";
import MatchDetail from "./MatchDetail";
import FilterButtonContainer from "./FilterButtonContainer/FilterButtonContainer";
import MatchSkeletonLoader from './MatchSkeletonLoader/MatchSkeletonLoader';
import { Box } from "@mui/material";

import matchServices from "../../services/matchServices";

import "./Matches.css";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [matchDetail, setMatchDetail] = useState();
    const [h2h, seth2h] = useState();
    const [filteredMatches, setFilteredMatches] = useState();

    useEffect(() => {
        matchServices
            .getAllMatches()
            .then((data) => {
                let sortedData = data.data.response.sort((a, b) =>
                    a.league.country > b.league.country ? 1 : -1
                );
                setTimeout(() => {
                setMatches(sortedData);
                setFilteredMatches(sortedData);
                }, 3000);
            })
            .catch((error) => console.log("error", error));
    }, []);

    const onMatchClickHandler = (id) => {
        const selectedMatch = matches.find((match) => match.fixture.id === id);
        setMatchDetail(selectedMatch);
        console.log(selectedMatch);
        const homeId = selectedMatch.teams.home.id;
        const awayId = selectedMatch.teams.away.id;
        matchServices
            .getH2H(homeId, awayId)
            .then((data) => {
                seth2h(data.data);
            })
            .catch((error) => console.log("error", error));
    };

    const onFilterButtonClickHandler = (e) => {
        setFilteredMatches(
            matchServices.sortMatchesByCountry(matches, e.target.textContent)
        );
    };

    const onSearchButtonChangeHandler = (e) => {
        setFilteredMatches(
            matchServices.searchMatch(filteredMatches, e.target.value)
        );
    };

    return (
        <>
            <FilterButtonContainer
                onButtonClick={onFilterButtonClickHandler}
                onSearchButtonChange={onSearchButtonChangeHandler}
            />

            <div className="pageContainer" width="80%">
                <Box
                    className="matchesContainer"
                    sx={{
                        bgcolor: "#111827",
                        height: "auto",
                        width: "45%",
                    }}
                >
                    {filteredMatches ? (
                        filteredMatches.map((match) => (
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
                    className="matchDetailsContainer"
                    sx={{ bgcolor: "#111827", height: "40%", width: "45%" }}
                >
                    {!matchDetail ? (
                        ""
                    ) : (
                        <MatchDetail matchDetail={matchDetail} h2h={h2h} />
                    )}
                </Box>
            </div>
        </>
    );
};

export default Matches;
