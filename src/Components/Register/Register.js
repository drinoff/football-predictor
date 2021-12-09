import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { Box } from "@mui/system";

import BasicModal from "../BasicModal/BasicModal";
import AuthContext from "../../contexts/AuthContext";
import authServices from "../../services/authServices";
import "./Register.css";

const Register = (props) => {
    const { register } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const rePass = formData.get("rePass");

        if (password !== rePass) {
            setError("Passwords do not match");
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
            }, 500);
            navigate("/register");
        } else {
            authServices
                .register(email, password)
                .then((authData) => {
                    const user = {
                        email: authData.user.email,
                        accessToken: authData.user.accessToken,
                        uid: authData.user.uid,
                        isAuthenticated: true,
                    };
                    register(user);
                    navigate("/");
                })
                .catch((err) => {});
        }
        console.log(error)
    };
    return (
        <Box
            className="registerContainer"
            sx={{ bgcolor: "#111827", height: "80%", width: "33%" }}
        >
            <BasicModal
                openModal={openModal}
                msg={"Success"}
                secondMsg={"You have successfully registered"}
                errorMsg={error}
            />
            <h1 className="pleaseRegister">Please Register</h1>
            <form
                id="register-form"
                action="POST"
                className="register-form"
                onSubmit={onSubmitHandler}
            >
                <div className="emailContainer">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        className="registerFormInputStyle"
                    />
                </div>

                <div className="passwordContainer">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="registerFormInputStyle"
                    />
                </div>
                <div className="rePassContainer">
                    <label htmlFor="rePass">Password</label>
                    <input
                        id="rePass"
                        type="password"
                        name="rePass"
                        className="registerFormInputStyle"
                    />
                </div>

                <input
                    className="registerButton"
                    type="submit"
                    value="Register"
                />
            </form>
        </Box>
    );
};

export default Register;
