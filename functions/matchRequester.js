const fetch = require("node-fetch");

const API_ENDPOINT = "https://v3.football.api-sports.io/";

exports.handler = async (event, context) => {
    const path = JSON.parse(event.path);
        fetch(API_ENDPOINT + path.path)
        .then((res) => res.json())
        .then((data) => {
            return { statusCode: 200, body: JSON.stringify({ data }) };
        })
     .catch ((error)=> {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed fetching data" }),
        };
    })
};
