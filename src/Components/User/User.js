import { Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import "./User.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  

const User = () => {
    return (
        <div className="userHeaderCard">
            <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
            <Avatar
                alt="Drin Drinoff"
                src="https://firebasestorage.googleapis.com/v0/b/football-predictor-3416d.appspot.com/o/Avatars%2Fdrinoff.jpg?alt=media&token=0450cfe6-95d4-41f4-a311-35136b2e54af"
                sx={{ width: "54px", height: "54px" }}
            />
            </StyledBadge>
            <a href="http://">My Profile</a>
            <a href="http://">My Predictions</a>
        </div>
    );
};

export default User;
