const fetch = require("node-fetch");
const API_KEY = process.env.API_FOOTBALL;
const API_ENDPOINT = "https://v3.football.api-sports.io/";

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const path = data.path;

    return fetch(API_ENDPOINT + path, {
        headers: {
        "x-apisports-key": API_KEY,
        }
    })
        .then((res) => res.json())
        .then((data) => {
            return { statusCode: 200, body: JSON.stringify({ data }) };
        })
        .catch((error) => {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Failed fetching data" }),
            };
        });
};
