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

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};
