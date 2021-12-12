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

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    });

    const mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: "Football-predictor user email from " + data.name,
        text: data.message + "\n\n" + data.email,
    };

    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return {
                statusCode: 422,
                body: JSON.stringify(error.response),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify(info.response),
            };
        }
    });
};
