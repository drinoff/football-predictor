import ContactForm from "./ContactForm";
import ContactDescription from "./ContactDescription";

import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contactDescription">
                <ContactDescription />
            </div>
            <div className="contactForm">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
