const sgMail = require('@sendgrid/mail')

const EMAIL = process.env.EMAIL_ADDRESS;
const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);



exports.handler = async (event) => {

    const data = JSON.parse(event.body);
    if (!data.message || !data.name || !data.email) {
        return {
            statusCode: 422,
            body: "Name, email, and message are required."
        };
    }

    const msg = {
        to: EMAIL, // Change to your recipient
        from: data.email, // Change to your verified sender
        subject: `You got email from ${data.name}`,
        text: data.message,
      }
      return sgMail
        .send(msg)
        .then(() => {
            return {
                statusCode: 422,
                body: "Message sent successfully.Well get in touch shortly!"
            };
        })
        .catch((error) => {
            return {
                statusCode: 422,
                body: error.toString()
            };
        })
    }