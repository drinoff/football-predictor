import { Avatar } from '@mui/material';
import "./User.css";

const User = () => {
  return (
    <div className = "userHeaderCard">
      <Avatar 
      alt="Mehmet Ismail" 
      src="../../Assets/images/drinoff.jpg" 
      sx={{ width: 54, height: 54 }}
      />
      <a href="http://">Профил</a>
      <a href="http://">Мои Прогнози</a>
    </div>
  );
}

export default User;