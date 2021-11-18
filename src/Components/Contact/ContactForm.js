import './ContactForm.css'

const ContactForm = (props) => {
    return (
        <form className = 'contactFormStyle' action="">
            <div className="name">
                <label  htmlFor="name">Name</label>
                <input className = 'formStyle' id="name" type="text" />
            </div>
            <div className="email">
                <label  htmlFor="email">Email</label>
                <input className = 'formStyle' id="email" type="text" />
            </div>
            <div className="message">
                <label  htmlFor="message">Message</label>
                <textarea  id="message" type="text" />
            </div>
            <input className = 'contactFormButton' type="button" value="Let's Talk" />
        </form>
    );
};

export default ContactForm;
