import { Box } from "@mui/system";

import authServices from '../../services/authServices';
import './Login.css';

const Login = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        authServices.login(email, password)
        .then(user =>console.log(user))
    }
    return (
        <Box
            className="loginContainer"
            sx={{ bgcolor: "#111827", height: "80%", width: "33%" }}
        >
            <h1 className="pleaseLogin">Please Login</h1>
            <form id="login-form" action="POST" className="login-form" onSubmit= {onSubmitHandler}>
                <div className="emailContainer">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" className="loginFormInputStyle" />
                </div>

                <div className="passwordContainer">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" className="loginFormInputStyle"/>
                </div>

                <input className="loginButton" type="submit" value="Login" />
            </form>
        </Box>
    );
};

export default Login;