var nodemailer = require('nodemailer');

const EMAIL = process.env.EMAIL_ADDRESS;

const PASSWORD = process.env.PASSWORD;


exports.handler = async (event) => {

    const data = JSON.parse(event.body);
    if (!data.message || !data.name || !data.email) {
        return {
            statusCode: 422,
            body: "Name, email, and message are required."
        };
    }

    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

var mailOptions = {
  from: EMAIL,
  to: EMAIL,
  subject: 'Football-predictor user email from ' + data.name,
  text: data.message + '\n\n' + data.email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    }