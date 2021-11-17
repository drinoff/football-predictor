import todaysDate from '../utils/todaysDate.js';
import {tzUser} from '../utils/timeZoneFinder.js';

const BASE_URL = 'https://v3.football.api-sports.io/';

const getAllMatches = ()=>{
    return fetch(`${BASE_URL}fixtures?date=${todaysDate()}&timezone=${tzUser}`,{
        headers: {
            "x-apisports-key": process.env.REACT_APP_FOOTBALL_API_KEY,
        }
    })
    .then((res) => res.json())
}

const getH2H = (homeId,awayId)=>{
    return fetch(`${BASE_URL}fixtures/headtohead?h2h=${homeId}-${awayId}`,{
        headers: {
            "x-apisports-key": process.env.REACT_APP_FOOTBALL_API_KEY,
        }
    })
    .then((res) => res.json())
}

const sortMatchesByCountry = (matches, country)=>{
    matches.filter((match) => match.league.country === country)
}

const matchServices = {
    getAllMatches,
    getH2H,
}

export default matchServices; 