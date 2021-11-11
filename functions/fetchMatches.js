const fetch = require("node-fetch");
exports.handler = async (event, context) => {
    try {
        const creds = `any:${process.env.API_KEY_FOOTBALL_API}`;
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?live=all",
            {
                method: "GET",
                headers: {
                    "x-apisports-key": creds,
                    redirect: 'follow'
                },
            }
        );
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({data }),
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};
