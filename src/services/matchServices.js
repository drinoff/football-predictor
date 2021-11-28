import todaysDate from "../utils/todaysDate.js";
import { tzUser } from "../utils/timeZoneFinder.js";

const BASE_URL = "https://v3.football.api-sports.io/";

const getAllMatches = () => {
    return fetch(
        `${BASE_URL}fixtures?date=${todaysDate()}&timezone=${tzUser}`,
        {
            headers: {
                "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
            },
        }
    ).then((res) => res.json());
};
const getAllLiveMatches = () => {
    return fetch(`${BASE_URL}fixtures?live=all&timezone=${tzUser}`, {
        headers: {
            "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
        },
    }).then((res) => res.json());
};

const getMatchById = (id) => {
    return fetch(`${BASE_URL}fixtures?id=${id}`, {
        headers: {
            "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
        },
    }).then((res) => res.json());
};

const getH2H = (homeId, awayId) => {
    return fetch(`${BASE_URL}fixtures/headtohead?h2h=${homeId}-${awayId}`, {
        headers: {
            "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
        },
    }).then((res) => res.json());
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
    return fetch(`${BASE_URL}predictions?fixture=${fixture}`, {
        headers: {
            "x-apisports-key": "63386f355c9be795e7feeb0b81b3dbef",
        },
    }).then((res) => res.json());
};

const matchServices = {
    getAllMatches,
    getH2H,
    sortMatchesByCountry,
    searchMatch,
    getMatchPrediction,
    getMatchById,
    getAllLiveMatches
};

export default matchServices;
