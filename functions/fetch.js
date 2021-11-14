const date = require("./todayDate");
const fetch = require("node-fetch");

const REACT_APP_FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;
const tzUser = "Europe/London";

const API_ENDPOINT = `https://v3.football.api-sports.io/fixtures?date=${date.TodayDate()}&timezone=${tzUser}`;

exports.handler = async (event, context) => {
    try {
        const response = await fetch(API_ENDPOINT, {
            headers: {
                "x-apisports-key": REACT_APP_FOOTBALL_API_KEY,
            },
        });
        const data = await response.json();
        return {
             statusCode: 200,
             body: JSON.stringify({msg: "Success", detail: data })
             };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed fetching data" }),
        };
    }
};
