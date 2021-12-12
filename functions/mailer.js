const nodemailer = require("nodemailer");

const EMAIL = process.env.EMAIL_ADDRESS;

const PASSWORD = process.env.PASSWORD;

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    if (!data.message || !data.name || !data.email) {
        return {
            statusCode: 422,
            body: "Name, email, and message are required.",
        };
    }

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    });

    var mailOptions = {
        from: EMAIL,
        to: "sisi236@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
    };

    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return {
                statusCode: 500,
                body: JSON.stringify(error),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify(info),
            };
        }
    });
};
