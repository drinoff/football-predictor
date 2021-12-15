import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { user } = useContext(AuthContext);

        return user.isAuthenticated ? (
            <Component {...props} user={user} />
        ) : (
            <Navigate to="/login" />
        );
    };

    return WrapperComponent;
};
