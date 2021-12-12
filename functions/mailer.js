const mailjet = require("node-mailjet").connect('0bee7d65c3418ff8960d2c64f99b2464', '4d2771943c1f2ebd9efd57ad56bc4eb9'
);

const EMAIL = process.env.EMAIL_ADDRESS;


exports.handler = async (event) => {
    const data = JSON.parse(event.body)
    
      if (!data.email || !data.name || !data.message) {
        return { statusCode: 422, body: 'Name, email, and message are required.' }
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
