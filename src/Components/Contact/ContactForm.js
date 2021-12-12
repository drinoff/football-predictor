import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BasicModal from "../BasicModal/BasicModal";
import emailServices from "../../services/emailServices";
import "./ContactForm.css";

const ContactForm = (props) => {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [openModal, setOpenModal] = useState(false);

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const name = formData.get("name");
        const message = formData.get("message");

        const body = {
            email,
            name,
            message,
        };
        if (!email || !name || !message) {
            setError("Please fill out all fields");
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
                navigate("/contact");
            }, 2000);
        } else {
            emailServices
                .sendEmail(body)
                .then((res) => {
                    setError(null);
                    setOpenModal(true);
                    setTimeout(() => {
                        setOpenModal(false);
                        navigate("/contact");
                        e.target.reset();
                    }, 2000);
                })
                .catch((err) => {
                    setError(err.message);
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                    navigate("/contact");
                });
        }
    };
    return (
        <>
            <BasicModal
                openModal={openModal}
                msg="Success!"
                secondMsg="Message Sent!"
                errorMsg={error}
            />
            <form
                className="contactFormStyle"
                action="POST"
                onSubmit={onFormSubmitHandler}
            >
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input
                        className="formStyle"
                        id="name"
                        name="name"
                        type="text"
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        className="formStyle"
                        id="email"
                        name="email"
                        type="text"
                    />
                </div>
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" type="text" />
                </div>
                <input
                    className="contactFormButton"
                    type="submit"
                    value="Let's Talk"
                />
            </form>
        </>
    );
};

export default ContactForm;
