
const sendEmail = (body) => {
    return fetch('/.netlify/functions/mailer', {
        'method': 'POST',
         'body': JSON.stringify(body)
        }).then(res => res.json())
}

const emailServices = {
    sendEmail
}

export default emailServices;