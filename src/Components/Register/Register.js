import { useContext } from "react";
import { useNavigate } from "react-router";

import { Box } from "@mui/system";

import AuthContext from "../../contexts/AuthContext";
import authServices from "../../services/authServices";
import "./Register.css";

const Register = (props) => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const rePass = formData.get("rePass");

        if (password !== rePass) {
            //do something
            window.alert("Password not match");
            navigate("/register");
        } else {
            authServices.register(email, password).then((authData) => {
                const user = {
                    email: authData.user.email,
                    accessToken: authData.user.accessToken,
                    uid: authData.user.uid,
                    isAuthenticated: true,
                };
                register(user);
                navigate("/");
            });
        }
    };
    return (
        <Box
            className="registerContainer"
            sx={{ bgcolor: "#111827", height: "80%", width: "33%" }}
        >
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
