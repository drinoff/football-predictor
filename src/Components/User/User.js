import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import "./User.css";

const User = () => {
  return (
    <div className = "userHeaderCard">
      <Avatar 
      alt="Drin Drinoff" 
      src="./drinoff.jpg" 
      sx={{ width: 54, height: 54, backgroundColor: "#1F6CFA" }}
      />
      <a href="http://">Профил</a>
      <a href="http://">Мои Прогнози</a>
    </div>
  );
}

export default User;