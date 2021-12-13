const fetch = require("node-fetch");
const API_KEY = '63386f355c9be795e7feeb0b81b3dbef';
const API_ENDPOINT = "https://v3.football.api-sports.io/";

exports.handler = async (event, context) => {
    const path = event.path;

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
