const mailgun = require("mailgun-js")

const EMAIL = process.env.EMAIL_ADDRESS;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
            headers: { Allow: "POST" },
        };
    }

    const data = JSON.parse(event.body);
    if (!data.message || !data.contactName || !data.contactEmail) {
        return {
            statusCode: 422,
            body: "Name, email, and message are required.",
        };
    }

    const mailgunData = {
        from: data.contactEmail,
        to: EMAIL,
        subject: `New contact from ${data.contactName}`,
        text: data.message,
    };

    mg
        .messages()
        .send(mailgunData)
        .then(() => ({
            statusCode: 200,
            body: "Your message was sent successfully! We'll be in touch.",
        }))
        .catch((error) => ({
            statusCode: 422,
            body: "There was an error sending your message. Please try again later.",
        }));
};
