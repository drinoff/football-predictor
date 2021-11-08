import { Avatar } from "@mui/material";
import "./User.css";

const User = () => {
    return (
        <div className="userHeaderCard">
            <Avatar
                alt="Drin Drinoff"
                src="https://firebasestorage.googleapis.com/v0/b/football-predictor-3416d.appspot.com/o/Avatars%2Fdrinoff.jpg?alt=media&token=0450cfe6-95d4-41f4-a311-35136b2e54af"
                sx={{ width: "54px", height: "54px" }}
            />
            <a href="http://">My Profile</a>
            <a href="http://">My Predictions</a>
        </div>
    );
};

export default User;
