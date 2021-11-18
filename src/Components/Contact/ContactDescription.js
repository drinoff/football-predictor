import "./ContactDescription.css";

const ContactDescription = () => {
    return (
        <>
            <h1 className="contactHeading">Contact</h1>
            <p className="talkToUs">Talk to Us</p>
            <div className="contactParagraphWrapper">
                <p className="contactParagraph">
                    Need to contact us? Please fill out the form provided and
                    somebody from our team will be in touch shortly
                </p>
            </div>
            <p className = 'fpTeam'>Football Predictor Team &copy;</p>
        </>
    );
};

export default ContactDescription;
