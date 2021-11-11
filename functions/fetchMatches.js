const fetch = require("node-fetch");
exports.handler = async (event, context) => {
    try {
        const creds = `any:${process.env.API_KEY_FOOTBALL_API}`;
        const response = await fetch(
            "https://v3.football.api-sports.io/status",
            {
                method: "GET",
                headers: {
                    "x-apisports-key": creds,
                },
            }
        );
        const data = await response.json();

        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: data.status, body: data.detail };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: "Success!", detail: data }),
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};
