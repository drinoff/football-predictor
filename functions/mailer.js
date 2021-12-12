const mailjet = require("node-mailjet").connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET
);

const EMAIL = process.env.EMAIL_ADDRESS;


exports.handler = async (event) => {
    const data = JSON.parse(event.body)
    
      if (!data.email || !data.name || !data.message) {
        return { statusCode: 422, body: JSON.stringify('Name, email, and message are required.') }
      }

    const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: EMAIL,
                    Name: data.email,
                },
                To: [
                    {
                        Email: EMAIL,
                        Name: 'Drinoff',
                    },
                ],
                Subject: data.name,
                TextPart:data.message,
                
            },
        ],
    });
    return request
        .then((result) => {
            return {
                statusCode: 200,
                body: JSON.stringify(result.body),
            };
        })
        .catch((err) => {
            return {
                statusCode: 500,
                body: JSON.stringify(err.statusCode),
            };
        });
};
