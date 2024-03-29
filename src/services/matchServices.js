import todaysDate from "../utils/todaysDate.js";
import { tzUser } from "../utils/timeZoneFinder.js";

const BASE_URL = '/.netlify/functions/matchRequester';

const getAllMatches = () => {
    const path = `fixtures?date=${todaysDate()}&timezone=${tzUser}`;
    return fetch(
        `${BASE_URL}`,{
            method: 'POST',
            body: JSON.stringify({
                path
            }),
        }
    ).then((res) => res.json());
};

const getMatchById = (id) => {
    const path = `fixtures?id=${id}`
    return fetch(
        `${BASE_URL}`,{
            method: 'POST',
            body: JSON.stringify({
                path
            }),
        }
    ).then((res) => res.json());
};

const getH2H = (homeId, awayId) => {
    const path = `fixtures/headtohead?h2h=${homeId}-${awayId}`;
    return fetch(
        `${BASE_URL}`,{
            method: 'POST',
            body: JSON.stringify({
                path
            }),
        }
    ).then((res) => res.json());
};

const sortMatchesByCountry = (matches, country) => {
    let filteredMatches = [];
    let ids = [];
    switch (country) {
        case "England":
            ids = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
            filteredMatches = matches
                .filter(
                    (match) =>
                        match.league.country === country &&
                        ids.includes(match.league.id)
                )
                .sort((a, b) => (a.league.id > b.league.id ? 1 : -1));
            break;
        case "Italy":
            ids = [135, 136, 137, 138, 139, 547, 705, 706];
            filteredMatches = matches
                .filter(
                    (match) =>
                        match.league.country === country &&
                        ids.includes(match.league.id)
                )
                .sort((a, b) => (a.league.id > b.league.id ? 1 : -1));
            break;
        case "France":
            ids = [61, 62, 63, 64, 65, 66];
            filteredMatches = matches
                .filter(
                    (match) =>
                        match.league.country === country &&
                        ids.includes(match.league.id)
                )
                .sort((a, b) => (a.league.id > b.league.id ? 1 : -1));
            break;
        case "Germany":
            ids = [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 529];
            filteredMatches = matches
                .filter(
                    (match) =>
                        match.league.country === country &&
                        ids.includes(match.league.id)
                )
                .sort((a, b) => (a.league.id > b.league.id ? 1 : -1));
            break;
        case "Spain":
            ids = [140, 141, 142, 143, 435, 436, 437, 438, 556, 692];
            filteredMatches = matches
                .filter(
                    (match) =>
                        match.league.country === country &&
                        ids.includes(match.league.id)
                )
                .sort((a, b) => (a.league.id > b.league.id ? 1 : -1));
            break;
        default:
            filteredMatches = matches;
    }
    return filteredMatches;
};

const searchMatch = (matches, searchString) => {
    return matches.filter(
        (match) =>
            match.teams.home.name.toLowerCase().includes(searchString) ||
            match.teams.away.name.toLowerCase().includes(searchString)
    );
};

const getMatchPrediction = (fixture) => {
    const path = `predictions?fixture=${fixture}`
    return fetch(
        `${BASE_URL}`,{
            method: 'POST',
            body: JSON.stringify({
                path
            }),
        }
    ).then((res) => res.json());
};

const getMatchOdds = (fixture) => {
    const path = `odds?fixture=${fixture}`
    return fetch(
        `${BASE_URL}`,{
            method: 'POST',
            body: JSON.stringify({
                path
            }),
        }
    ).then((res) => res.json());
};

const matchServices = {
    getAllMatches,
    getH2H,
    sortMatchesByCountry,
    searchMatch,
    getMatchPrediction,
    getMatchById,
    getMatchOdds
};

export default matchServices;