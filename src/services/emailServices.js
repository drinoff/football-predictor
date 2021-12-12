
const sendEmail = (body) => {
    return fetch('/.netlify/functions/mailer', {
        'method': 'POST',
         'body': JSON.stringify(body)
        }).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        });
}

const emailServices = {
    sendEmail
}

export default emailServices;